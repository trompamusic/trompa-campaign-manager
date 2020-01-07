const Dotenv           = require('dotenv-webpack');

module.exports = async ({ config }) => {
  config.plugins.push(new Dotenv());

  return config;
};
