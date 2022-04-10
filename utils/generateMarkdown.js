// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${data.license}`
}

// TODO: Create a function to generate markdown for README

// start returning data from questions 
// add markdown styling
// then make sure its writing to the file 
function generateMarkdown(data) {
  return ` ${data.title} 

  ## GitHub username: 
  ${data.github}@github.com

  ## Table of Contents
  * [License](#License)
  * [Usage](#Usage)
  * [Email](#Email)
  * [Future-Development](#Future-Development)
  * [Link](#link)
  
  ## Description
  ${data.description}

  ## License
  ${data.license}

  ## Usage
  ${data.usage}

  ## Email 
  ${data.email}

  ## Future Development 
  ${data.development}

  ## link 
  ${data.link}
`
}



// add more markdown like user story 
// const generatePage = (questions) => {
//   return ` ##User story 
//   ${questions.title}

// `}

module.exports = generateMarkdown
