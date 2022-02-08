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

function wait(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds));
}

function getGithubData(gitUrl) {
  if (gitUrl.startsWith("http")) {
    const formatted = gitUrl.slice(0, -4).split("/");
    return {
      username: formatted[3],
      repository: formatted[4],
    };
  } else {
    const formatted = gitUrl.slice(0, -4).split(":")[1].split("/");
    return {
      username: formatted[0],
      repository: formatted[1],
    };
  }
}

function saveMarkdownFile(file, filename = "README") {
  fs.writeFile(filename + ".md", file, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("");
    console.log(`YEAH! ${filename}.md generated!`);
    console.log("");
  });
}

function saveJsonFile(file, filename = "package") {
  fs.writeFile(filename + ".json", JSON.stringify(file), (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("");
    console.log(`YEAH! ${filename}.json updated!`);
    console.log("");
  });
}

function getLicenseUrl(license) {
  switch (license) {
    case "Apache License 2.0":
      return "https://choosealicense.com/licenses/apache-2.0/";
    case "GNU General Public License v3.0":
      return "https://choosealicense.com/licenses/gpl-3.0/";
    case "MIT License":
      return "https://choosealicense.com/licenses/mit/";
    case "Boost Software License 1.0":
      return "https://choosealicense.com/licenses/bsl-1.0/";
    case "GNU Affero General Public License v3.0":
      return "https://choosealicense.com/licenses/agpl-3.0/";
    case "GNU Lesser General Public License v3.0":
      return "https://choosealicense.com/licenses/lgpl-3.0/";
    case "Mozilla Public License 2.0":
      return "https://choosealicense.com/licenses/mpl-2.0/";
    case "The Unlicense":
      return "https://choosealicense.com/licenses/unlicense/";
  }
  return license;
}

function preparePackageJSON(packageJSON, responses) {
  delete packageJSON.name;
  delete packageJSON.version;
  delete packageJSON.description;
  delete packageJSON.homepage;
  delete packageJSON.repository;
  delete packageJSON.engines;
  delete packageJSON.bugs;
  delete packageJSON.license;
  delete packageJSON.author;

  return {
    name: responses.name,
    version: responses.version,
    description: responses.description,
    homepage: responses.homepage,
    repository: {
      type: "git",
      url: responses.repository_url,
    },
    engines: {
      node: responses.node_version,
      npm: responses.npm_version,
    },
    bugs: {
      url: responses.bugs_url,
      email: responses.bugs_email,
    },
    license: responses.license,
    author: {
      name: responses.author_name,
      email: responses.author_email,
      url: responses.author_url,
    },
    ...packageJSON,
  };
}

module.exports = {
  checkFileExist,
  getGithubData,
  saveMarkdownFile,
  saveJsonFile,
  getLicenseUrl,
  wait,
  preparePackageJSON,
};
