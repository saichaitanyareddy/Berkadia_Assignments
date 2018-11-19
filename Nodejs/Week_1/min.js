var readline=require('readline-sync');
var num1=readline.question("enter number of elements");
var arr=[];
console.log("enter elements one-by-one");
for(var i=0;i<num1;i++)
{
	var element=readline.question();
	arr.push(element);
}
console.log("the elements in the array are:" + arr);

console.log("The maximum element is " + Math.min(...arr));//'...' is a spread operator


---------------------------------------------------------------------------------------


F:\js>node min.js
enter number of elements5
enter elements one-by-one
9
10
15
8
1
the elements in the array are:9,10,15,8,1
The maximum element is 1

