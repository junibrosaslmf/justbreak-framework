module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-lmf`
  extends: ["lmf"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
