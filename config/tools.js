function isFileJSON(file) {
  return /(json)$/i.test(file);
}

function getListOfRoutes(list = []) {
  const buff = []
  list.forEach(element => {
      element.forEach(el => {
          buff.push({
            "id": new Date().getTime(),
            "slug": el.slugName
          });
      })
  })
  return buff;
}

module.exports = {
    isFileJSON,
    getListOfRoutes
}
