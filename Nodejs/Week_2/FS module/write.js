var file = require('fs');
var readline=require('readline-sync');
var data=readline.question("enter data that you want to write into the file:\n");

file.writeFile('message.txt', data, function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});


-------------------------------------------------------------------------------------------

F:\js\week_2>node write.js
enter data that you want to write into the file:
i am writing data into afile
Successfully Written to File.

