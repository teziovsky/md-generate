const fs = require("fs");

function checkFileExist(filepath) {
  let exist = true;
  try {
    fs.accessSync(filepath, fs.constants.F_OK);
  } catch (e) {
    exist = false;
  }
  return exist;
}

function getGithubData({ repository_url }) {
  if (repository_url.startsWith("http")) {
    const formatted = repository_url.slice(0, -4).split("/");
    return {
      username: formatted[3],
      repository: formatted[4],
    };
  } else {
    const formatted = repository_url.slice(0, -4).split(":")[1].split("/");
    return {
      username: formatted[0],
      repository: formatted[1],
    };
  }
}

module.exports = {
  checkFileExist,
  getGithubData,
};
