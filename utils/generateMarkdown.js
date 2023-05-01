
  
  
  const inquirer = require('inquirer');
  const fs = require('fs');
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
        let readme = `# ${answers.projectName} <br>`;
        readme += `## ${answers.description}<br> `;
        readme += '## Installation ';
        readme += `<br>${answers.installation}<br> `;
        readme += '## Usage ';
        readme += `<br>${answers.usage}<br> `;
        readme += '## Contributing ';
        readme += `<br>${answers.contributing}<br> `;
        readme += '## Credits ';
        readme += `<br>${answers.credits}<br>`;
        readme += '### <br>';
        if (answers.license !== 'None') {
          readme += `This project is released under the ${answers.license} license.`;
            if (answers.license === 'MIT') {
              readme += `https://opensource.org/licenses/MIT, https://img.shields.io/badge/License-MIT-yellow.svg`;
            } else if (answers.license === 'Apache-2.0') {
              readme += `https://opensource.org/licenses/Apache-2.0, https://img.shields.io/badge/License-Apache%202.0-blue.svg`;
            } else if (answers.license === 'GPL-3.0') {
              readme += `https://www.gnu.org/licenses/gpl-3.0, https://img.shields.io/badge/License-GPLv3-blue.svg`;
            } else if (answers.license === 'BSD-3-Clause') {
              readme += `https://opensource.org/licenses/BSD-3-Clause, https://img.shields.io/badge/License-BSD%203--Clause-blue.svg`;
            } else {
              readme += '';
            }
            fs.writeFile('README_sample.md', JSON.stringify(readme, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
          );
        
   }
  }
  )
};
          
  
  module.exports = generateMarkdown;
  