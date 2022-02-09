const { getLicenseUrl } = require("./utils");

function generateMarkdown(responses, githubData) {
  const license = `[![GitHub](https://img.shields.io/github/license/${githubData.username}/${
    githubData.repository
  })](${getLicenseUrl(responses.license)})`;
  const twitter = `[![Twitter Follow](https://img.shields.io/twitter/follow/${responses.author_twitter}?style=social)](https://www.twitter.com/${responses.author_twitter})`;

  return `# Hey it's ${responses.name}! 🖖🏼

![GitHub package.json version](https://img.shields.io/github/package-json/v/${githubData.username}/${
    githubData.repository
  }) ${responses.license ? license : ""} ${responses.author_twitter ? twitter : ""}

> ${responses.description}

## Demo 👀
#### [🏠 Link to demo here!](${responses.homepage})

## Get started 🏁

Clone the project and go to the project directory

\`\`\`bash
git clone ${responses.repository_url} && cd ${responses.name}
\`\`\`

Install dependencies

\`\`\`bash
npm install
\`\`\`

Start the application!

\`\`\`bash
${responses.run_command}
\`\`\`

## Author 🙎🏼‍

#### [@${githubData.username}](https://www.github.com/${githubData.username})

## Contact ☎️

If you have any suggestions, please [email me here](mailto:${responses.author_email})! 🔥

## License 🧾

#### [${responses.license}](${getLicenseUrl(responses.license)})

---

README created with ❤️ by [md-generate](https://www.npmjs.com/package/md-generate)`;
}

module.exports = generateMarkdown;
