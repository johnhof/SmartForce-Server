//
// MINING MANAGER
//
// use the links gathered from search to scrape pages for info

var async = require('async');

//
// load the site specific handlers
//
var facebook = require(__dirname + '/facebook')
  , google   = require(__dirname + '/google')
  , linkedin = require(__dirname + '/linkedin')
  , twitter  = require(__dirname + '/twitter')

module.exports = function (state, callback) {
  
  // TODO: map url's to handlers
  handlers = [];
  
  async.parallel(handlers, function (error, state) {
    if (error) callback(error);
    
    return callback(null, state);
  })
  
};