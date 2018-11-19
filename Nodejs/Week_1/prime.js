var readline=require('readline-sync');
var num1=readline.question("enter number");
var count=0;
for(var i=2;i<num1;i++)
{
 	if(num1%i==0)
	{
		count++;
		break;
	}
	
}
if(count==1)
{
	console.log("not prime");
}
else
{
	console.log("prime");
}


-------------------------------------------------------


F:\js>node prime.js
enter number5
prime

F:\js>node prime.js
enter number9
not prime

