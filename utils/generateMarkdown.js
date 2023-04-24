// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (answers.license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (answers.license === 'Apache-2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (answers.license === 'GPL-3.0') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (answers.license === 'BSD-3-Clause') {
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else {
      return '';
    }
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (answers.license === 'MIT') {
      return 'https://opensource.org/licenses/MIT';
    } else if (answers.license === 'Apache-2.0') {
      return 'https://opensource.org/licenses/Apache-2.0';
    } else if (answers.license === 'GPL-3.0') {
      return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (answers.license === 'BSD-3-Clause') {
      return 'https://opensource.org/licenses/BSD-3-Clause';
    } else {
      return '';
    }
  }
  
  
  const inquirer = require('inquirer');
  
  function generateMarkdown() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'What is the name of the project?'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a brief description of the project:'
        },
        {
          type: 'input',
          name: 'installation',
          message: 'How do you install the project?'
        },
        {
          type: 'input',
          name: 'usage',
          message: 'How do you use the project?'
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'How can people contribute to the project?'
        },
        {
          type: 'input',
          name: 'credits',
          message:'who helped by contributing to the project?'
      },
      {
          type: 'list',
          name: 'license',
          message: 'What kind of license does your project have?',
          choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None']
        }
      ])
      .then(answers => {
        let readme = `# ${answers.projectName}\n\n`;
        readme += `${answers.description}\n\n`;
        readme += '## Installation\n\n';
        readme += `${answers.installation}\n\n`;
        readme += '## Usage\n\n';
        readme += `${answers.usage}\n\n`;
        readme += '## Contributing\n\n';
        readme += `${answers.contributing}\n\n`;
        readme += '## Credits\n\n';
        readme += `${answers.credits}\n\n`;
        readme += '## License\n\n';
        if (answers.license !== 'None') {
          readme += `This project is released under the ${answers.license} license.\n`;
            if (answers.license === 'MIT') {
              readme += `https://opensource.org/licenses/MIT`;
            } else if (answers.license === 'Apache-2.0') {
              readme += `https://opensource.org/licenses/Apache-2.0`;
            } else if (answers.license === 'GPL-3.0') {
              readme += `https://www.gnu.org/licenses/gpl-3.0`;
            } else if (answers.license === 'BSD-3-Clause') {
              readme += `https://opensource.org/licenses/BSD-3-Clause`;
            } else {
              readme += '';
            }
          
        // } else {
        //   readme += 'This project is not licensed.\n';
        // }
        console.log(readme);
          }
  });
    }
  
  module.exports = generateMarkdown;
  