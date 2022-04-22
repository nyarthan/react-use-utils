import * as path from 'node:path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [...(process.env.COVERAGE_TRANSFORM ? ['istanbul'] : [])],
      },
    }),
  ],
  test: {
    setupFiles: 'vitest.setup.ts',
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ['json'],
      include: ['src/**/*'],
    },
    include: ['tests/**/*'],
  },
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'lib',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
