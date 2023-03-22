module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-justbreak`
  extends: ["justbreak"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
