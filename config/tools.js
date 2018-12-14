function isFileJSON(file) {
  return /(json)$/i.test(file);
}

module.exports = {
    isFileJSON
}
