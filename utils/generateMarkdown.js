// Renders a badge with the license name
function renderLicenseBadge(license) {
  // Replaces the blank spaces of the license name with dashes
  // So that the badge is rendered correctly
  const licenseWithDashes = license.replace(/\s+/g, "_");
  // Returns the badge in markdown format
  return `![${license}](https://img.shields.io/badge/${licenseWithDashes}-16A34A)`;
}

// Renders the link were the user can obtain more information about the chosen license
function renderLicenseLink(license) {
  // Checks which license was chosen and returns its link
  switch (license) {
    case "Apache License 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case "GNU General Public License v3.0":
      return "https://opensource.org/license/gpl-3-0";
    case "MIT License":
      return "https://opensource.org/license/mit";
    case 'BSD 2-Clause "Simplified" License':
      return "https://opensource.org/license/bsd-2-clause";
    case 'BSD 3-Clause "New" or "Revised" License':
      return "https://opensource.org/license/bsd-3-clause";
    case "Boost Software License 1.0":
      return "https://opensource.org/license/bsl-1-0";
    case "Creative Commons Zero v1.0 Universal License":
      return "https://creativecommons.org/publicdomain/zero/1.0/legalcode.en";
    case "Eclipse Public License 2.0":
      return "https://opensource.org/license/epl-2-0";
    case "GNU Affero General Public License v3.0":
      return "https://opensource.org/license/agpl-v3";
    case "GNU General Public License v2.0":
      return "https://opensource.org/license/gpl-2-0";
    case "GNU Lesser General Public License v2.1":
      return "https://opensource.org/license/lgpl-2-1";
    case "Mozilla Public License 2.0":
      return "https://opensource.org/license/mpl-2-0";
    case "The Unlicense License":
      return "https://opensource.org/license/unlicense";
  }
}

// Generates a readme.md file with the given data with a template literal
function generateMarkdown(data) {
  // Returns the generated markdown file
  return `
# ${data.title} 
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [How to contribute](#how-to-contribute)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.title} is under the ${
    data.license
  }, to see the details of the license click the following link: ${renderLicenseLink(
    data.license
  )}

## How to Contribute

${data.contributing}

## Tests

${data.testing}

## Questions

${data.questions}

Contact information:
- GitHub: https://github.com/${data.username}
- Email: ${data.email}
  
`;
}

// Exports
export { generateMarkdown };
