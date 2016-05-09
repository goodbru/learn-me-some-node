var mymodule = require('./06_mymodule.js')
var argv = process.argv;
var dir = argv[2];
var ext = '.' + argv[3];

mymodule(dir, ext, function(err, files) {
  if (err) return err;
  files.forEach(function (file) {
    console.log(file);
  });
});