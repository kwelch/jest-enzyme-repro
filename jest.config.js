module.exports = {
  setupFilesAfterEnv: ["jest-enzyme"],
  testEnvironment: "enzyme",
  testEnvironmentOptions: {
      enzymeAdapter: "react16",
  },
  transform: {
    "^.+\\.ts$": require.resolve(
        "./jestTransformer.ts",
    ),
},
};