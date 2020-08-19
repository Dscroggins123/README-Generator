
let fs = require("fs")
const inquirer = require("inquirer") // array of questions for user
const questions = [
    {"message": "What is your project Title? ", name:"Title" },
    {"message": "What is your project about?  ", name:"Description" },
    {"message": "What would you like in your Table of Contents? ", name:"TableOfContents", type:"checkbox", 
    choices:[
    "Installation",
    "Usage",
    "License",
    "Contributing",
    "Tests",
    "Questions"] },
    
    {"message": "How do we install your application? ", name:"Installation" },
    {"message": "What is your application used for? ", name:"Usage" },
    {"message":  "What licenses did you use ", name:"Licenses", type:"checkbox", 
choices:[
    {name:"Apache",value:"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"},
{name:"Boost",value:"[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"},
{name:"BSD",value:"[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"},
{name:"GNU",value:"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"}] },
    {"message": "Who contributed to this application? ", name:"Contributions" },
    {"message": "How did you test this application? ", name:"Tests" },
    {"message": "Enter GitHub name", name:"Question" },
    {"message": "Enter Email Address", name:"emailAddress" }
];
inquirer.prompt(questions)
.then(function(response){
let data = `# ${response.Title}
## Description 
${response.Description}
## Table of Content
* ${response.TableOfContents.join("\n")}
## Installation
${response.Installation}
## Usage
${response.Usage}
# ${response.Licenses}
## Contributions
${response.Contributions}
## Test
## Questions 
* [Github:](https://github.com/${response.Question})
${response.emailAddress}
`

})
function writeToFile(fileName, data) {
    
    
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
