import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['lib/**/*'],
      exclude: ['lib/**/*.stories.tsx'],
    },
  },
});
