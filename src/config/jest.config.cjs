export default {
  testEnvironment: "node",
  transform: {}, // nu vrem transformare Babel
  extensionsToTreatAsEsm: [".js"],
  verbose: true,
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // fix pentru importuri relative ESM
  },
  forceExit: true, // forțează ieșirea după testare
  detectOpenHandles: false,
};
