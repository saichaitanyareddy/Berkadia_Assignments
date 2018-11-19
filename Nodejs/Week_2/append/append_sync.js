var fs = require('fs');
var count=1;
function Append(file1, file2){
 data=fs.readFileSync(file2,'utf-8');
    

    fs.appendFileSync(file1, data);
 
	console.log("files appended "+count);
		count=count+1;
}
file1='file1.txt';
file2='file2.txt';
file3='file3.txt';
file4='file4.txt';
file5='file5.txt';
Append(file1,file2);
Append(file1,file3);
Append(file1,file4);
Append(file1,file5);
----------------------------------------------------------


F:\js>node append.js
files appended 1
files appended 2
files appended 3
files appended 4

