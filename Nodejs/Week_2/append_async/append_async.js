var fs = require('fs');

function Append(file1, file2){
  fs.readFile(file2, function (err, data) {
    

    fs.appendFile(file1, data, function () {
	fs.readFile(file3,function(err,data){
		fs.appendFile(file1,data,function(){
			fs.readFile(file4,function(err,data){
				fs.appendFile(file1,data,function(){
					fs.readFile(file5,function(err,data){
						fs.appendFile(file1,data,function(){
						});
					});
		
				});
			});
		});
      
       });
    });
	console.log("files appended ");
		
	
 });
}
file1='file1.txt';
file2='file2.txt';
file3='file3.txt';
file4='file4.txt';
file5='file5.txt';
Append(file1,file2);

------------------------------------------------------------------------------------------------

F:\js>node append_async.js
files appended



