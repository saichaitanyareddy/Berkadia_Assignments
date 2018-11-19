var readline=require('readline-sync');
var num1=readline.question("enter the number of elements you want to sort");
var arr=[];
console.log("enter elements one-by-one");
for(var i=0;i<num1;i++)
{
	var element=readline.question();
	arr.push(element);
}
console.log("the elements in the array are:" + arr);

var temp=0;
for(var i=0;i<num1;i++)
{
	for(var j=0;j<num1-i-1;j++)
	{
		if(arr[j]>arr[j+1])
		{
			temp=arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=temp;
		}
	}
}
console.log("sorted elements are:" + arr);


--------------------------------------------------------------


F:\js>node sort.js
enter the number of elements you want to sort5
enter elements one-by-one
5
9
1
3
6
the elements in the array are:5,9,1,3,6
sorted elements are:1,3,5,6,9

