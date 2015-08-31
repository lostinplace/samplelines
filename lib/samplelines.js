var readline = require('readline'),
  stream = require('stream');

function sampleLines(anInput, anOutput, aProbability, aSeed){
  if(anInput instanceof stream.Stream){
    var rl = readline.createInterface({
      input: anInput
    });

    var rng;
    if(aSeed){
      var seedrandom = require('seedrandom');
      var rng = seedrandom(aSeed);
    }else{
      rng = Math.random;
    }

    rl.on('line',function(line){
      var rn = rng();
      if(rn < aProbability){
        anOutput.write(line + '\n');
      }
    });

  } else {
    throw('must provide a writeable stream');
  }
}

module.exports = sampleLines;
