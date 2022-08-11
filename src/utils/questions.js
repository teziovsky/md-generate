const { getGithubData } = require("./utils");

function getQuestions(packageJSON, gitUrl) {
  const { username, repository } = getGithubData(gitUrl);
  return [
    {
      name: "name",
      type: "input",
      message: "🎫 Project name",
      default() {
        return packageJSON?.name ? packageJSON.name : "md-generate";
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Project name is required!");
        }
        if (answer.length >= 214) {
          return console.log("Project name can't be longer than 214 characters!");
        }
        return true;
      },
    },
    {
      name: "version",
      type: "input",
      message: "🔖 Project version",
      default() {
        return packageJSON?.version ? packageJSON.version : "1.0.0";
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Project version is required!");
        }
        return true;
      },
    },
    {
      name: "description",
      type: "input",
      message: "📝 Project description",
      default() {
        return packageJSON?.description ? packageJSON.description : "Awesome project! 🎆";
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Project description is required.");
        }
        return true;
      },
    },
    {
      name: "homepage",
      type: "input",
      message: "🏠 Project homepage",
      default() {
        return packageJSON?.homepage ? packageJSON.homepage : `https://github.com/${username}/${repository}/#readme`;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Project homepage is required!");
        }
        return true;
      },
    },
    {
      name: "repository_url",
      type: "input",
      message: "🎖️  Git repository URL",
      default() {
        return gitUrl;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Git repository URL is required.");
        }
        return true;
      },
    },
    {
      name: "node_version",
      type: "list",
      message: "🔢 Minimum node.js version required",
      default() {
        return packageJSON?.engines?.node ? packageJSON.engines.node : ">=v14.0.0";
      },
      choices: [">=v12.0.0", ">=v14.0.0", ">=v16.0.0", ">=v18.0.0"],
    },
    {
      name: "npm_version",
      type: "list",
      message: "🔢 Minimum npm version required",
      default() {
        return packageJSON?.engines?.npm ? packageJSON.engines.npm : ">=v6.0.0";
      },
      choices: [">=v6.0.0", ">=v7.0.0", ">=v8.0.0"],
    },
    {
      name: "run_command",
      type: "input",
      message: "🔥 NPM Run command",
      default() {
        return "npm run serve";
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("NPM run command is required!");
        }
        return true;
      },
    },
    {
      name: "bugs_url",
      type: "input",
      message: "🔗 Issues link",
      default() {
        return packageJSON?.bugs?.url ? packageJSON.bugs.url : `https://github.com/${username}/${repository}/issues`;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Issues link is required!");
        }
        return true;
      },
    },
    {
      name: "bugs_email",
      type: "input",
      message: "🔗 Issues e-mail",
      default() {
        return packageJSON?.bugs?.email;
      },
    },
    {
      name: "license",
      type: "list",
      message: "🧾 Project license",
      default() {
        return packageJSON?.license ? packageJSON.license : "MIT License";
      },
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "Boost Software License 1.0",
        "GNU Affero General Public License v3.0",
        "GNU Lesser General Public License v3.0",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      name: "author_name",
      type: "input",
      message: "🙎🏼‍ Author name",
      default() {
        return packageJSON?.author?.name;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Author name is required.");
        }
        return true;
      },
    },
    {
      name: "author_email",
      type: "input",
      message: "📧 Author e-mail",
      default() {
        return packageJSON?.author?.email;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Author e-mail is required!");
        }
        return true;
      },
    },
    {
      name: "author_url",
      type: "input",
      message: "🔗 Author website url",
      default() {
        return packageJSON?.author?.url;
      },
    },
    {
      name: "author_twitter",
      type: "input",
      message: "🔗 Author twitter name (without @)",
    },
    {
      name: "update_package_json",
      type: "list",
      message: "✍️  Do you want to update your package.json?",
      default() {
        return "Yes";
      },
      choices: ["Yes", "No"],
    },
  ];
}

module.exports = getQuestions;
