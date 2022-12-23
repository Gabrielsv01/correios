/** @type {import('ts-jest').JestConfigWithTsJest} */

process.env.APP_ENV = 'test';
process.env.TZ = 'America/New_York';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', 'src', '__tests__'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['jest-expect-message'],
  testPathIgnorePatterns: ['/node_modules/', 'src/App.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  testPathIgnorePatterns: ['/node_modules/', 'src/App.tsx'],
  verbose: false,
  automock: false,
};
