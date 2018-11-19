var fs = require('fs');
 
var contents = fs.readFileSync('add.txt', 'utf8');
console.log(contents);
console.log('readFile operation done');

-----------------------------------------------------------


F:\js\week_2>node reading_a_file_sync.js
hello world!
This file is read by readFile method.
readFile operation done



