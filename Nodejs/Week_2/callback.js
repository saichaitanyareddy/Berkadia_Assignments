var fs = require('fs');

function Append(file1, file2){
	fs.readFile(file2,function(err,data){
		fs.appendFile(file1,data,function(){
		});
	});
	console.log("file2 is appended to file1");
}
file1='file1.txt';
file2='file2.txt';
Append(file1,file2);
------------------------------------------------------------


F:\js>node callback.js
file2 is appended to file1



