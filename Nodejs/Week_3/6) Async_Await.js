var fs=require('fs');
var c=0;

function appendProm(file1,file2)
	{	c=c+1;
		console.log("files appending"+c);
		let prom= new Promise((resolve,reject)=>
		{
			fs.readFile(file2,'utf-8',function(err,data){fs.appendFile(file1,data,()=>{});});
		});
		
	
	console.log("files appended"+c);
		
	
	}

async function Async(){
	let a=await appendProm('file1.txt','file2.txt');
	console.log(a);
	let b=await appendProm('file1.txt','file3.txt');
	console.log(b);
	let c=await appendProm('file1.txt','file4.txt');
	console.log(c);
	let d=await appendProm('file1.txt','file5.txt');
	console.log(d);
}

Async();
console.log("Last");
------------------------------------------------------------------------------------------------------


cmd>node Async_Await.js
files appending1
files appended1
Last
undefined
files appending2
files appended2
undefined
files appending3
files appended3
undefined
files appending4
files appended4
undefined

