const inquirer = require('inquirer');
const { generateMarkdown, licenseNames } = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create a function to initialize app
const promptReadMe = () => {
   return inquirer.prompt([
       {
           type: 'input',
           name: 'title',
           message: 'What is the title of your project?',
           validate: titleInput => {
               if (titleInput) {
                   return true;
               } else {
                   console.log('Invalid input, please try again.');
                   return false;
               }
           }
       },
       {
           type: 'input',
           name: 'description',
           message: 'Please enter a short description of your project',
           validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Invalid input, please try again.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions to install your project',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                     console.log('Invalid input, please try again.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions on how to use your project',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Invalid input, please try again.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please provide instructions on how other users can contribute',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Invalid input, please try again.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide instructions on how to test your project',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Invalid input, please try again.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'Please select a license to use.',
            choices: licenseNames
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub user Name',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Invalid input, please try again.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Invalid input, please try again.');
                    return false;
                }
            }
        }
   ]);
}

// TODO: Create a function to write README file
const writeToFile = (readMe) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', readMe, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Readme Created!'
            });
        }); 
    });
};

promptReadMe()
    .then((readmeData) => {
        const readMeFile = generateMarkdown(readmeData)
        return writeToFile(readMeFile);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch (err => {
        console.log(err);
    })
