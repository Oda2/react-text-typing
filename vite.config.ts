/// <reference types="vitest" />
import { join, resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      include: ['lib'],
      exclude: ['lib/**/*.stories.tsx', 'lib/**/*.test.tsx'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, join('lib', 'index.ts')),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        ...Object.keys(peerDependencies),
      ],
      output: {
        assetFileNames: 'style.css',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      onwarn: (warning, warn) => {
        if (warning.code === 'CIRCULAR_DEPENDENCY') return;
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        warn(warning);
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    coverage: {
      all: false,
      enabled: true,
      reporter: ['text', 'lcov'],
      include: ['lib/**/*.{ts,tsx}'],
    },
  },
});
