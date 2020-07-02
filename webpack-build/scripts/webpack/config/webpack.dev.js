// *** Development Webpack Configuration File ***

// Modules
const merge = require("webpack-merge");

// Common Configuration File
const commonConfig = require("./webpack.common");

// Constants
const { DIST_DIR } = require("../utils/constants");

module.exports = () => {
  // some stuff
  return merge(commonConfig, {
    mode: "none",
    devtool: false,
    output: {
      filename: "[name].bundle.js",
      path: DIST_DIR,
    },
  });
};
