const fs = require('fs');
const path = require('path');

function isFileJSON(file) {
  return /(json)$/i.test(file);
}

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
        if(isFileJSON(file)) {
          const exitStat = {
            name: absolutePath,
            parentName: parentPath || '/'
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




    // fs.readdir(_path, (err, files) => {

    //   let localStore = {};
      
    //   files.forEach(file => {
    //     const _pathName = _path + '/' + file;
    //     const stat = fs.statSync(_pathName);
    //     const absolutePath = path.join(__dirname, _pathName);
  
    //     // console.log(file);
  
    //     if (stat.isFile()) {
    //       if(isFileJSON(file)) {
    //         const exitStat = {
    //           name: absolutePath,
    //           parentName: parentPath || '/'
    //         };

    //         localStore = exitStat;
    //       }
    //     }
  
    //     if (stat.isDirectory()) {
    //       // console.log('directory', file);
    //       const _parentPath = parentPath ? parentPath+'/'+file : file;
    //       ScanDirectory(_pathName, _parentPath);
    //     }
  
    //   });
    
    //   console.log('localstore:', localStore);
    // });

}

ScanDirectory('./db');
console.log(memo);
