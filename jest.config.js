module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],      // ← note the plural
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)']
};