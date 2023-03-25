module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-lmfv`
  extends: ["lmfv"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
