/* eslint-disable no-console */

const chalk = require("chalk");
const ip = require("ip");

const divider = chalk.gray("\n-----------------------------------");

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {
  error: err => {
    console.error(chalk.red(err));
  },

  appStarted: (port, host, tunnelStarted) => {
    console.log(`Server started ! ${chalk.green("✓")}`);
    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green("✓")}`);
    }

    console.log(`
${chalk.bold("Access URLs:")}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
        (tunnelStarted
          ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}`
          : "")}${divider}
${chalk.blue(`Press ${chalk.italic("CTRL-C")} to stop`)}
    `);
  }
};

module.exports = logger;
