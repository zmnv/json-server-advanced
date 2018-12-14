const fs = require('fs');
// const path = require('path');

const Tools = require('./config/tools');

function ScanRoutes(items = []) {
  const exitRoutes = [];

  items.forEach(item => {
    const stat = fs.statSync(item.pathAbsName);

    if (stat.isFile() && Tools.isFileJSON(item.fileName)) {
      const tempStore = [];
      // console.log(item.parentName + ':');
      const file = require(item.pathAbsName);
      for(const propName in file) {
        const slugTemp = item.parentName === '/' ? `/${propName}` : `${item.parentName}/${propName}`
        tempStore.push({
          fileName: item.fileName,
          parentName: item.parentName,
          pathAbsName: item.pathAbsName,
          pathRltName: item.pathRltName,
          routeName: propName,
          slugName: slugTemp,
        })
      }
      exitRoutes.push(tempStore);
      
    }

  });

  return exitRoutes;
}

module.exports = ScanRoutes;
