module.exports = async function (context, req) {
    
  var fs = require('fs');
  var path = require('path');

      var baseDir = __dirname;
      var defaultFile = path.join(baseDir, 'quotes');
      fs.readFile(defaultFile, 'utf8', function (err, data) {
        
        
                // Display the file content
                context.res.body = data.toString();
    });
      


  
          

      
  }
