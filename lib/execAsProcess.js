var sampleLines = require('./samplelines'),
  fs = require('fs');

function execAsProcess(){
  var argv = require('minimist')(process.argv.slice(2)),
    printUsage = require('./printUsage');

  if(process.argv.length == 2){
    printUsage();
    return;
  }

  var infile = argv._.length && argv._[argv._.length-1],
    probability = Number(argv.p || argv.probability),
    seed = argv.s || argv.seed,
    inStream;

  if(isNaN(probability)){
    console.error('Must provide probability')
    printUsage();

    return -1;
  }

  if(infile){
    try{
      inStream = fs.createReadStream(infile);
    } catch(ex){
      console.error(ex)
      printUsage();
      return -1;
    }
  }else{
    inStream = process.stdin;
  }

  sampleLines(inStream, process.stdout, probability, seed);
}

module.exports = execAsProcess;
