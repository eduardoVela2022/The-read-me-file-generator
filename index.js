// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import { generateMarkdown } from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    // Title
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: isNotEmpty,
  },
  {
    // Description
    type: "input",
    name: "description",
    message: "What is your project about?",
    validate: isNotEmpty,
  },
  {
    // Installation
    type: "input",
    name: "installation",
    message: "What are the installation instructions of your project?",
    validate: isNotEmpty,
  },
  {
    // Usage
    type: "input",
    name: "usage",
    message: "How does a user use your project?",
    validate: isNotEmpty,
  },
  {
    // Contributing
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines of your project?",
    validate: isNotEmpty,
  },
  {
    // Testing
    type: "input",
    name: "testing",
    message: "What are the testing instructions of your project?",
    validate: isNotEmpty,
  },
  {
    // License
    type: "rawlist",
    name: "license",
    message: "What license does your project uses?",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal License",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense License",
    ],
  },
  {
    // Questions
    type: "input",
    name: "questions",
    message:
      "How do you want user's to ask you questions via GitHub and email?",
    validate: isNotEmpty,
  },
  {
    // GitHub username
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
    validate: isNotEmpty,
  },
  {
    // Email
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: isNotEmpty,
  },
];

function isNotEmpty(value) {
  // If the value is empty, log an error message to the console
  if (value === "") {
    return "Please enter a value.";
  }

  // Else, return true
  return true;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Creates a file with the given file name and data
  // If there is an error, it is logged into the console
  fs.writeFile(fileName, data, (error) => {
    if (error !== null) {
      console.log(error);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  // Questions are asked to the user to get the information he or she wants the readme.md file to have
  inquirer.prompt(questions).then((answers) => {
    // Markdown document is created with the information of the user's answers
    const markdownDocument = generateMarkdown(answers);
    // Readme.md file is created and written to
    writeToFile("generatedReadMe.md", markdownDocument);
  });
}

// Function call to initialize app
init();
