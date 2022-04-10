// TODO: Include packages needed for this application
const inquirer = require("inquirer"); 
const fs = require("fs"); 
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input", 
    name: "title", 
    message: "enter project name"
},{
    type: "input",
    name: "github",
    message: "enter github name"
},{
    type: "input",
    name: "description",
    message: "give a description of your project"
},{
    type: "input",
    name: "deploy",
    message: "how to execute code"  
},{
    type: "list",
    name: "license",
    message: "what license would you like",
    choices: ["MIT", "GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0"] 
},{
    type: "input",
    name: "usage",
    message: "what is the application used for"
      
},{
    type: "input",
    name: "test",
    message: "test used"
},{
    type: "input",
    name: "development",
    message: "what will be added to project at a later date"
},{
    type: "input",
    name: "email",
    message: "what is the best contact email?"    
},{
    type: "input", 
    name: "link",
    message: "what is the github repo link for project?"
}
];



// TODO: Create a function to write README file
// ** this is where the current issue is
// need to npm install path .. import path 
// ** consider making a variable where you stored as an empty array, then push that data to the array 
// then for each item it appends the data 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
             console.log(answers)
            const genMarkdown = generateMarkdown(answers)
            writeToFile("README.md", genMarkdown)
            // ** Look up what write fileSync does 
        })
        .catch((error) => {
            if (error.isTtyError) {
                //  Prompt couldnt be rendered in the current enviroment 

            }else {
                console.log(error)
                // something went wrong 
            }
        });
};


// Function call to initialize app
init();
    // inquirer.prompt(questions).then( res => {
    //     writeToFile('README.md', generateMarkdown({ ...res}));
    // });



