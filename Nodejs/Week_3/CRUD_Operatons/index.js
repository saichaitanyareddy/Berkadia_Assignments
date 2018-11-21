const express=require('express');
const app=express();
var file=require('fs');
var Read_content='';



app.get('/',(req,res)=>{
	res.send("Welcome to node");
});

//GET operation to write a file
app.get('/Write',(req,res)=>{file.writeFile('add.txt', 'data', function(err, data){
    					if (err) console.log(err);
    					console.log("Successfully Written to File.");
					});
		res.send("Written the content successfully through get operation \n ");
});

//GET operation to read a file
app.get('/Read',(req,res)=>{file.readFile('add.txt', 'utf-8', function(err, data){
    					if (err) console.log(err);
					
					Read_content=data;
    					console.log("File read successfully \nFile contents are :",data);
					
					})
		
		res.write("File content is Read successfully through get operation \n ",);
		res.end(Read_content);
		
});

//POST operation to append content to a file
app.post('/Post',(req,res)=>{
		
		file.appendFile('add.txt', 'posted', function(err, data){
    							if (err) console.log(err);
					
    							console.log("File content is Appended Successfully through post operation \n");
							});
		res.send("File content is Appended Successfully through post operation \n");
	
});

//PUT operation to update a file
app.put('/Put',(req,res)=>{
		
		file.writeFile('add.txt', 'updated', function(err, data){
    							if (err) console.log(err);
					
    							console.log("File content is updated Successfully through put operation");
							});
		res.send("File content is updated Successfully through put operation");
	
});

//DELETE operation to delete content from a file
app.delete('/Delete',(req,res)=>{
		
		file.writeFile('add.txt','', function(err, data){
    							if (err) console.log(err);
					
    							console.log("File content is  Successfully deleted");
							});
		res.send("File content is  Successfully deleted");
	
});



app.listen(3000,()=> {console.log("server started running");});