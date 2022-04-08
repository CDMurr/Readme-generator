// * then look into the lesson about write file
// * then right out the next thing you will work on when you get back into the material. 

// TODO: Include packages needed for this application
const inquirer = require("inquirer") 
const fs = require("fs") 
const generateMarkdown = require("./utils/generateMarkdown")
const path = require("path")



// fs.writeToFile('README.md', generateMarkdown(), err => {
//     if (err) throw err;

//     // console.log('README.md created');
// });

// const generatePage = (name, github) => {
//     return`
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>READme demo</title>
//     </head>
  
//     <body>
//       <h1>${name}</h1>
//       <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
//   };
 

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
    type: "list",
    name: "license",
    message: "what license would you like",
    choices: ["MIT", "GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0"]
    // * does installation need to be a name instead of license? 
},{
    type: "input",
    name: "usage",
    message: "what is the application used for"
},{
    type: "input",
    name: "contributing",
    message: "what are the contribution guidelines"
},{
    type: "input",
    name: "tests",
    message: "how to run test?"
},

];



// TODO: Create a function to write README file
// ** this is where the current issue is
// need to npm install path .. import path 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers)
            writeToFile("README.md", answers)
            // console.log(generateMarkdown(answers))
        });
};


// Function call to initialize app
init();
    // inquirer.prompt(questions).then( res => {
    //     writeToFile('README.md', generateMarkdown({ ...res}));
    // });



