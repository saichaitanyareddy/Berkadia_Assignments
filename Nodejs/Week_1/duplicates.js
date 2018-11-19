var readline=require('readline-sync');
var num1=readline.question("enter the number of elements");
var arr=[];
console.log("enter elements one-by-one");
for(var i=0;i<num1;i++)
{
	var element=readline.question();
	arr.push(element);
}
console.log("the elements in the array are:" + arr);

var c=[];
var count=0;
c.push(arr[0]);
var res=[];

for(var i=0;i<num1;i++)
{
	if(c.includes(arr[i]) && i!=0)
	{
		res.push(arr[i]);
		count=count+1;
	}
	else
	{
		c.push(arr[i]);	
	}
}
console.log("the duplicate elements are:"+ res);

-------------------------------------------------------------


F:\js>node duplicates.js
enter the number of elements5
enter elements one-by-one
1
2
2
5
3
the elements in the array are:1,2,2,5,3
the duplicate elements are:2

