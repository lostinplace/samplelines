var fs = require('fs');
var output = fs.readFileSync('./content/usage.txt','utf8');

function printUsage(){
  console.log(output);
}

module.exports = printUsage;
