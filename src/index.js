#! /usr/bin/env node
const {
  checkFileExist,
  getGithubData,
  saveMarkdownFile,
  saveJsonFile,
  wait,
  preparePackageJSON,
} = require("./utils/utils");
const getQuestions = require("./utils/questions");
const generateMarkdown = require("./utils/markdown");
const inquirer = require("inquirer");
const { exec } = require("shelljs");

const gitUrl = exec("git remote get-url --all origin", {
  silent: true,
}).replace("\n", "");
const packageJsonPath = process.cwd() + "/package.json";

async function init() {
  const packageJsonExist = checkFileExist(packageJsonPath);

  if (packageJsonExist) {
    const packageJSON = await require(packageJsonPath);

    const questions = await getQuestions(packageJSON, gitUrl);
    const responses = await inquirer.prompt(questions);

    const githubData = await getGithubData(gitUrl);
    const README = await generateMarkdown(responses, githubData);

    await wait(1000);
    await saveMarkdownFile(README, "README");

    if (responses.update_package_json === "Yes") {
      await wait(1000);
      const newPackageJSON = preparePackageJSON(packageJSON, responses);
      await saveJsonFile(newPackageJSON, "package");
    }
  } else {
    console.log(
      "The package.json does not exist in the current directory. Run command in the root directory of your project!"
    );
    return false;
  }
}

init();
