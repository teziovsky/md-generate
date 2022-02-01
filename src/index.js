#! /usr/bin/env node

const checkFileExist = require("./utils/fileExist");
const getQuestions = require("./utils/questions");
const inquirer = require("inquirer");

const packageJsonPath = process.cwd() + "/package.json";

async function init() {
  const exist = checkFileExist(packageJsonPath);

  if (exist) {
    const packageJSON = await require(packageJsonPath);
    const questions = await getQuestions(packageJSON);
    const responses = await inquirer.prompt(questions);

    console.log("responses: ", responses);
  } else {
    console.log(
      "The package.json does not exist in current directory. Run command in root directory of your project!"
    );
    return false;
  }
}

init();
