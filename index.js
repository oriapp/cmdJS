const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const Configstore = require('configstore');
const conf = new Configstore('ginit');


const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');


clear();

console.log(
  chalk.yellow(
    figlet.textSync('R C N', { horizontalLayout: 'full' })
  )
);


if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a Git repository!'));
    process.exit();
}
  

const run = async () => {
    const credentials = await inquirer.askGithubCredentials();
    console.log(credentials);
  };
  
run();