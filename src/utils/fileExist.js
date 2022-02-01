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

module.exports = checkFileExist;
