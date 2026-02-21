import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['lib/**/*'],
      exclude: ['lib/**/*.stories.ts', 'lib/**/*.stories.tsx'],
    },
  },
});
