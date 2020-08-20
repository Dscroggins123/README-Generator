// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.Licenses}  ${response.Title}
  ## Description 
  ${response.Description}
  ## Table of Content
  * [](#${response.TableOfContents.join(") \r * [](#")})
  ## Installation
  ${response.Installation}
  ## Usage
  ${response.Usage}
  
  ## Contributions
  ${response.Contributions}
  ## Test
  ## Questions 
  [Github:](https://github.com/${response.Question})
  ${response.emailAddress}
  `
}

module.exports = generateMarkdown
