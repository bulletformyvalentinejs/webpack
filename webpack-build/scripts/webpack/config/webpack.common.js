// *** Common Webpack Configuration File ***

// Constants
const { SRC_DIR } = require("../utils/constants");

module.exports = () => {
  // some stuff
  return {
    entry: {
      main: SRC_DIR,
    },
  };
};
