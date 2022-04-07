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

// start returning data from questions 
// add markdown styling
// then make sure its writing to the file 
function generateMarkdown(data) {
  return `# ${data.title}

`;
}



// add more markdown like user story 
const generatePage = (questions) => {
  return ` ##User story 
  ${questions.title}

`}

module.exports = generateMarkdown;
