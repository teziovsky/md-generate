#! /usr/bin/env node

const { checkFileExist, getGithubData } = require("./utils/utils");
const getQuestions = require("./utils/questions");
const generateMarkdown = require("./utils/markdown");
const inquirer = require("inquirer");

const packageJsonPath = process.cwd() + "/package.json";

async function init() {
  const exist = checkFileExist(packageJsonPath);

  if (exist) {
    const packageJSON = await require(packageJsonPath);

    const questions = await getQuestions(packageJSON);
    const responses = await inquirer.prompt(questions);

    const githubData = await getGithubData(responses);
    const README = await generateMarkdown("fucking markdown");

    console.log("README: ", README);
  } else {
    console.log(
      "The package.json does not exist in the current directory. Run command in the root directory of your project!"
    );
    return false;
  }
}

init();
