export default {
  clearMocks: true,
  testEnvironment: "jsdom",
  preset: 'ts-jest/presets/js-with-ts',
  testMatch: [
    '<rootDir>/src/**/?(*.)(test).{ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'dist/',
    '<rootDir>/src/TextTyping.ts'
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/**/*.stories.*'],
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testPathIgnorePatterns: ["./node_modules/"]
};
