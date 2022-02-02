function getQuestions(packageJSON) {
  return [
    {
      name: "name",
      type: "input",
      message: "👨🏼‍💻 Name",
      default() {
        return packageJSON?.name;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Name is required!");
        }
        if (answer.length >= 214) {
          return console.log("Name can't be longer than 214 characters!");
        }
        return true;
      },
    },
    {
      name: "version",
      type: "input",
      message: "🏷  Version",
      default() {
        return packageJSON?.version;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Version is required!");
        }
        return true;
      },
    },
    {
      name: "description",
      type: "input",
      message: "📝 Description",
      default() {
        return packageJSON?.description;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Description is required.");
        }
        return true;
      },
    },
    {
      name: "homepage",
      type: "input",
      message: "🏠 Homepage",
      default() {
        return packageJSON?.homepage;
      },
    },
    {
      name: "bugs_url",
      type: "input",
      message: "🔗 Issues link",
      default() {
        return packageJSON?.bugs?.url;
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
      message: "🧾 License",
      default() {
        return packageJSON?.license;
      },
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
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
      message: "✉️  Author e-mail",
      default() {
        return packageJSON?.author?.email;
      },
    },
    {
      name: "author_url",
      type: "input",
      message: "🔗 Author url",
      default() {
        return packageJSON?.author?.url;
      },
    },
    {
      name: "repository_url",
      type: "input",
      message: "🎖️  Git repository URL",
      default() {
        return packageJSON?.repository?.url;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Git repository URL is required.");
        }
        return true;
      },
    },
  ];
}

module.exports = getQuestions;
