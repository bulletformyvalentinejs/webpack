// modules
const { resolve } = require("path");
const { path: ROOT_DIR } = require("app-root-path");

// Export of constants
exports.SRC_DIR = resolve(ROOT_DIR, "src");
exports.DIST_DIR = resolve(ROOT_DIR, "dist");
exports.BUILD_DIR = resolve(ROOT_DIR, "build");
exports.TEMPLATE = resolve(ROOT_DIR, "src/template");
