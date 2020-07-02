// *** Production Webpack Configuration File ***

// Modules
const merge = require("webpack-merge");

// Common Configuration File
const commonConfig = require("./webpack.common");

// Constants
const { BUILD_DIR } = require("../utils/constants");

module.exports = () => {
  // some stuff
  return merge(commonConfig, {
    mode: "production",
    output: {
      filename: "[name].[hash].js",
      path: BUILD_DIR,
    },
  });
};
