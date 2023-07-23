module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest', // Use this if you have TypeScript, otherwise, use 'react' for JSX support
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
