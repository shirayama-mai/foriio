module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|js)",
    "**/?(*.)+(spec|test).+(ts|js)"
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "moduleNameMapper": {
    "@src(.*)$": "<rootDir>/src/$1"
  },
  "globalSetup": "<rootDir>/test/setup-env.ts"
}