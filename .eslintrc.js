module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-junibrosas`
  extends: ["junibrosas"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
