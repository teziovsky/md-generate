#! /usr/bin/env node

const fs = require("fs");
const inquirer = require("inquirer");
const packageJsonPath = process.cwd() + "/package.json";

fs.access(packageJsonPath, (err) => {
  if (err) {
    console.log(
      "package.json does not exist. Run command in root directory of your project!"
    );
    return false;
  }

  const packageJSON = require(packageJsonPath);

  inquirer
    .prompt([
      {
        name: "name",
        message: "Name of project",
        type: "input",
        default() {
          return packageJSON && packageJSON.name;
        },
      },
    ])
    .then((config) => {
      console.log("config: ", config);
    });
});
