module.exports = async function (context, req) {
    
  const fs = require('fs');
  const path = context.executionContext.functionDirectory + '/quotes.txt';
  fs.readFileSync(path, 'utf-8', function(err, data){
      if (err) {
        context.res.body = err;
      }
      context.res.body = path;
  });

  }
