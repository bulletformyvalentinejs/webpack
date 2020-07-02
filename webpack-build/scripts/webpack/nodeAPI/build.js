// Core
const webpack = require("webpack");
const chalk = require("chalk");

// Production Configuration File
const config = require("../config/webpack.prod")();

// Compiler
const compiler = webpack(config);

// Hooks
compiler.hooks.beforeRun.tap("before-run", (compiler) => {
  console.log(chalk.blue("Before Run Hook"));
});
compiler.hooks.done.tap("done", (stats) => {
  console.log(chalk.blue("Done Hook"));
});

// Run Compiler
compiler.run((err, stats) => {
  // configuration errors
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  console.log(chalk.greenBright("Build Completed!"));
  const info = stats.toString({
    hash: false,
    modules: true,
    colors: true,
    chunks: false,
    version: false,
    depth: true,
    env: true,
    orphanModules: true,
  });
  console.log(info);

  if (stats.hasErrors()) {
    // compilation errors
    console.log(chalk.redBright("Compilation Error!"));
    console.error(info);
  }

  if (stats.hasWarnings()) {
    // compilation warnings
    console.log(chalk.yellowBright("Compilation Warning!"));
    console.warn(info);
  }
});
