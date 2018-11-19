var fs = require('fs');
 
fs.readFile('add.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('readFile operation done');

-------------------------------------------------------------------


F:\js\week_2>node reading_a_file.js
readFile operation done
hello world!
This file is read by readFile method.

