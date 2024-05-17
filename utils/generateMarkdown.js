// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Returns the generated markdown file
  return `
# ${data.title}

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

## How to Contribute

${data.contributing}

## Tests

${data.testing}

## License

${data.title} is under the ${data.license}

#Questions

${data.questions}

Contact information:
GitHub: https://github.com/${data.username}
Email: ${data.email}
  
`;
}

export { generateMarkdown };
