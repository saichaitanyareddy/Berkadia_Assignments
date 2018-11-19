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

console.log("The maximum element is " + Math.max(...arr));//'...' is a spread operator

---------------------------------------------------------------------------------------


F:\js>node max.js
enter number of elements5
enter elements one-by-one
5
9
18
20
1
the elements in the array are:5,9,18,20,1
The maximum element is 20

