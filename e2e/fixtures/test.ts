import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';
import { test as baseTest } from '@playwright/test';

const nycOutput = path.join(process.cwd(), '.nyc_output');

const generateUID = (): string => crypto.randomBytes(16).toString('hex');

export const test = baseTest.extend({
  context: async ({ context }, use) => {
    await context.addInitScript(() =>
      (window as any).collectIstanbulCoverage(
        JSON.stringify((window as any).__coverage__),
      ),
    );
    await fs.promises.mkdir(nycOutput, { recursive: true });
    await context.exposeFunction(
      'collectIstanbulCoverage',
      (coverageJSON: string) => {
        if (coverageJSON) {
          fs.writeFileSync(
            path.join(nycOutput, `playwright_coverage_${generateUID()}.json`),
            coverageJSON,
          );
        }
      },
    );
    await use(context);
    for (const page of context.pages()) {
      await page.evaluate(() =>
        (window as any).collectIstanbulCoverage(
          JSON.stringify((window as any).__coverage__),
        ),
      );
      await page.close();
    }
  },
});

export const expect = test.expect;
