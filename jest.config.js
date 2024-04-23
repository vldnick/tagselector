/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // Add file resolutions for unit test environment
  // http://www.thedreaming.org/2020/11/09/jest-for-web-projects/
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/__mocks__/svgrMock.tsx',
  },
  // testMatch: ['**/*.test.tsx'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

