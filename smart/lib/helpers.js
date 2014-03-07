var fs  = require('fs')
  , log = require(process.cwd() + '/lib/logger') 

module.exports = {
  loadConfig : loadConfig,
  parseJson  : parseJson
}

function loadConfig (path) {
  var content = fs.readFileSync(path)
    , json   = parseJson(content);
  
  if (!json) {
    log.warning('Failed to parse the config file: ' + path);
  }
  
  return json;
}

function parseJson (text) {
  try {
    var json = JSON.parse(text);
  } catch (e) {
    log.warning('Failed to parse json: \n' + text);
    log.out(e);
  }
  
  return json || null;
}