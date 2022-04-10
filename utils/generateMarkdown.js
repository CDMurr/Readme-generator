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

// function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title} 

  ## GitHub username: 
  ${data.github}@github.com

  ## Table of Contents
  * [Description](#description)
  * [License](#license)
  * [Usage](#usage)
  * [development](#development)
  * [runcode](#runcode)
  * [test](#test)
  * [Email](#email)
  * [Link](#link)
  
  ## description
  ${data.description}

  ## runcode
  ${data.deploy}
  
  ## license
  ${data.license}

  ## test
  ${data.test}
  
  ## usage
  ${data.usage}
  
  ## development 
  ${data.development}

  ## email 
  ${data.email}

  ## link 
  ${data.link}
`
}

module.exports = generateMarkdown
