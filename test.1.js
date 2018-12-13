const fs = require('fs');
const path = require('path');

function isFileJSON(file) {
  return /(json)$/i.test(file);
}

class ScanDirectory {

  constuctor(memoList = []) {
    this.memoList = memoList;
  }

  toScan(_path, parentPath) {
      const files = fs.readdirSync(_path);
  
      const localStore = [];
  
      files.forEach(file => {
        const _pathName = _path + '/' + file;
        const stat = fs.statSync(_pathName);
        const absolutePath = path.join(__dirname, _pathName);
  
        // console.log(file);
  
        if (stat.isFile()) {
          if(isFileJSON(file)) {
            localStore.push({
              name: absolutePath,
              parentName: parentPath || '/'
            });
          }
        }
  
        if (stat.isDirectory()) {
          const _parentPath = parentPath ? parentPath+'/'+file : file;
          this.toScan(_pathName, _parentPath);
        }
  
      });
      
      this.memoList.push(localStore);
  }
  
}

module.exports = ScanDirectory;

