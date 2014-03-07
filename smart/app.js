var program = require('commander')
  , async   = require('async')
  , helpers = require('./lib/helpers');


//
// set up command line params
//
program.version('0.0.1')
  .option('-s, --single',              'run the miner against the single target')
  .option('-t  --target [targetName]', 'run the miner against the targeted user')
  .parse(process.argv);
  
  
// load the config file
confObj = helpers.loadConfig('./config.json');
  
// store the config settings, and option for use later in the flow
var state = {
  // either translate the target directly from config, or use split on the param
  targetName : {
    first  : '',
    middle : '',
    last   : ''
  }
}
  

//
// load the parts of the flow
//
var flow = require('./flow')

//
// initialize the waterfall
//
function init (callback){
  // send the state along to the next step in the flow
  return callback(null, state);
}
    
//
// execute
//
async.waterfall([
    init,
    flow.search,
    flow.miningManager
  ], flow.finalize);