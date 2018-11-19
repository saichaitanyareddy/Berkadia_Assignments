var readline=require('readline-sync');
var num1=readline.question("enter number");
var a=0;
console.log(a);
var b=1;
console.log(b);
for(var i=0;i<num1-2;i++)// as we are actually printing the first two numbers we are using -2 in the loop
{
 	var c=a+b;
	console.log(c);
	a=b;
	b=c;
}

----------------------------------------------------------------------------


F:\js>node fibo.js
enter number5
0
1
1
2
3





