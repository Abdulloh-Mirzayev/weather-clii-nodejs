import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("SUCCESS") + " " + message);
};

const printHelp = () => {
  console.log(dedent`
    ${chalk.bgYellow("Help")}
    -s [CITY] for enter city
    -t [API_KEY] for saving token
    -h for help
  `);
};

export { printError, printSuccess, printHelp };
