import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
});
