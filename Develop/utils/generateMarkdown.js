const licenses = [
  {
    name: "GNU AGPLv3",
    link: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  },
  {
    name: "GNU GPLv3",
    link: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  },
  {
    name: "GNU LGPLv3",
    link: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  },
  {
    name: "Mozilla Public License 2.0",
    link: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  },
  {
    name: "Apache License 2.0",
    link: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  },
  {
    name: "MIT License",
    link: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  },
  {
    name: "Boost Software Licesnse 1.0",
    link: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  },
  {
    name: "Unilicense",
    link: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
];

// Function to splice license names out of objects
const getLicenseNames = (license) => {
  return license.name;
};

// Map license names into array for node execution to display as choices
const licenseNames = licenses.map(getLicenseNames);

// Pair the license selected by the user to the link
getLicenseLink = (userInput) => {
  for (let i = 0; i < licenses.length; i++) {
    if (userInput.licenses === licenses[i].name) {
      licenseSection = `${licenses[i].name}: <br />${licenses[i].link}`
    }
  }
  return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Get licesnse selected by user
  getLicenseLink(data);

  return `
# ${data.title}

## Description
${data.description}

## License
This application is covered under the ${licenseSection}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Contribute](#contribute)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribute
${data.contribute}

## Tests
${data.tests}

## Contribute
${data.contribute}

## Questions
For questions about this project, please refer to my personal GitHub at https://github.com/${data.github}
You can also reach me via email at ${data.email}

`;
}

module.exports = { generateMarkdown, licenseNames }