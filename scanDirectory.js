const fs = require('fs');
const path = require('path');

const Tools = require('./config/tools');

const memo = [];

function ScanDirectory(_path, parentPath) {
    const files = fs.readdirSync(_path);

    let localStore = [];

    files.forEach(file => {
      // console.log('go:', file);
      const _pathName = _path + '/' + file;
      const stat = fs.statSync(_pathName);
      const absolutePath = path.join(__dirname, _pathName);

      // console.log(file);

      if (stat.isFile()) {
        if(Tools.isFileJSON(file)) {
          const fileToSlug = file.slice(0, -5);

          const exitStat = {
            fileName: file,
            fileNameClear: fileToSlug,
            parentChildName: parentPath ? parentPath + '/' + fileToSlug : fileToSlug,
            parentName: parentPath ? `/${parentPath}` : '/',
            pathAbsName: absolutePath,
            pathRltName: _pathName,
          };

          // console.log(exitStat);
          localStore.push(exitStat);
        }
      }

      if (stat.isDirectory()) {
        // console.log('directory', file);
        const _parentPath = parentPath ? parentPath+'/'+file : file;
        ScanDirectory(_pathName, _parentPath);
      }

    });
    memo.push(localStore);
}

function ScanDirectoryBootstrap() {
  return new Promise((resolve) => {
    ScanDirectory('./db');

    const exit = [];
    memo.forEach(elem => exit.push(...elem));

    // console.log(exit);

    resolve({exit, memo});
  });
}

module.exports = ScanDirectoryBootstrap;
