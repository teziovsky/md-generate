function getQuestions(packageJSON) {
  return [
    {
      name: "name",
      type: "input",
      message: "👨🏼‍💻 Name",
      default() {
        return packageJSON.name;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Name is required!");
        }
        return true;
      },
    },
    {
      name: "version",
      type: "input",
      message: "🏷  Version",
      default() {
        return packageJSON.version;
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
        return packageJSON.description;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Description is required.");
        }
        return true;
      },
    },
    {
      name: "author",
      type: "input",
      message: "🙎🏼‍ Author",
      default() {
        return packageJSON.author;
      },
      validate(answer) {
        if (answer.length === 0) {
          return console.log("Author is required.");
        }
        return true;
      },
    },
    {
      name: "license",
      type: "input",
      message: "🧾 License",
      default() {
        return packageJSON.license;
      },
    },
    {
      name: "homepage",
      type: "input",
      message: "🏠 Homepage",
      default() {
        return packageJSON.homepage;
      },
    },
    {
      name: "contributing",
      type: "input",
      message: "License",
      default() {
        return packageJSON.license;
      },
    },
    {
      name: "tests",
      type: "input",
      message: "License",
      default() {
        return packageJSON.license;
      },
    },
    {
      name: "license",
      type: "list",
      message: "License",
      default() {
        return packageJSON.license;
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
  ];
}

module.exports = getQuestions;
