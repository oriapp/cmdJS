const inquirer = require('inquirer');

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your GitHub username or e-mail address:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password.';
          }
        }
        },
        {
            name: 'gay?',
            type: 'gay?',
            message: 'are you gay? y/n',
            validate: function(value) {
                if (value == 'y') {
                  return 'No homo zone'
                } else {
                    value = 'no';
                    return true;
              }
            }
          }
    ];
    return inquirer.prompt(questions);
  },
};