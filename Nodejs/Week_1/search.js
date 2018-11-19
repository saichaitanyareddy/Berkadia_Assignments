var readline=require('readline-sync');
var num1=readline.question("enter the number of elements in the array");
var arr=[];
console.log("enter elements one-by-one");
for(var i=0;i<num1;i++)
{
	var element=readline.question();
	arr.push(element);
}
console.log("the elements in the array are:" + arr);
var key=readline.question("enter the search element:");
var temp=0;
for(var i=0;i<num1;i++)
{
	if(arr[i]==key)
	{	temp=1;
		console.log("search is successfull and the key is in position ",i);
	}
}
if(temp==0)
{
	console.log("search unsuccessful");
}

------------------------------------------------------------------------------------------

F:\js>node search.js
enter the number of elements in the array5
enter elements one-by-one
9
3
5
2
6
the elements in the array are:9,3,5,2,6
enter the search element:2
search is successfull and the key is in position  3


