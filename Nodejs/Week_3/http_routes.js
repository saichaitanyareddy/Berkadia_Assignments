var http = require('http');
var file=require('fs');
var Readed_content;
const server=http.createServer( (req, res) => {
  	if(req.url==='/'){
	
  	res.write("TRY using Url's like : \n '/Write' \n '/Append' \n '/Read' \n '/Delete' ");
  
  	res.end();
	}
	if(req.url==='/Write'){
		res.write("Writing to file is Done",file.writeFile('add.txt', 'data', function(err, data){
    					if (err) console.log(err);
    					console.log("Successfully Written to File.");
					}));
		res.end();
		
	}
	if(req.url==='/Append'){
		res.write("Appending to file is Done",file.appendFile('add.txt', 'data', function(err, data){
    					if (err) console.log(err);
					
    					console.log("Successfully Appended to File.");
					}));
		
		res.end();
		
	}
	
	if(req.url==='/Read'){
		
		res.write("Reading to a file \n",file.readFile('add.txt', 'utf-8', function(err, data){
    					if (err) console.log(err);
					Readed_content=data;
    					console.log("File read successfully.");
					}));
		
		res.end(Readed_content);
		
	}
	if(req.url==='/Delete'){
		res.write("Deleted the content of the file",file.writeFile('add.txt','', function(err, data){
    					if (err) console.log(err);
    					console.log("Successfully deleted the content of the File.");
					}));
		res.end();
		
	}
	
 
  
  
  
 
});

server.listen(3000,()=>console.log("server started"));

-------------------------------------------------------------------------------------------------------------------------------

cmd>nodemon http_routes.js
[nodemon] 1.18.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node http_routes.js`
server started
Successfully Written to File.
File read successfully.
File read successfully.
Successfully Appended to File.
Successfully deleted the content of the File.
