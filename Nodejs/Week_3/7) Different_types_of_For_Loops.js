For:
	For loop is used for iterating a object based on condition.
	It is mostly used when we know the number of times the loop will execute.
	For loop consists of:
		i)Initialization
		ii)condition based on which the loop iterates
		iii)increment or decrement
For of:
	For of loop iterates and logs values as an iterable object defines to be iterated over i.e, array elements.
	For of loop doesn't iterate over object's properties.

For in:
	For in loop iterates over that object and logs array indexes not the values that stored in the array.
	we need to specify 'array[index]' inorder to get the exact element.
	For in loop iterates over object's properties.

var students=[ {Name:'Sai'},{Name:'Chaitanya'},{Name:'Madhu'},{Name:'Hari'},{Name:'Pradeep'},{Name:'Pushpak'},{Name:'Vamsi'}];


for(let i=0;i<students.length;i++)	//for loop
{
	console.log(students[i]);
}
console.log("\n");

for (i in students)	//for in 
{
	console.log(students[i]);
}
console.log("\n");

for (var i of students)	//for of
{
	console.log(i);
}
console.log("\n");

students.forEach(myFun);	//forEach

function myFun(i)
{
 var item=i;
console.log(item);
};
------------------------------------------------------------------------------

cmd>node For_Loops.js
{ Name: 'Sai' }
{ Name: 'Chaitanya' }
{ Name: 'Madhu' }
{ Name: 'Hari' }
{ Name: 'Pradeep' }
{ Name: 'Pushpak' }
{ Name: 'Vamsi' }


{ Name: 'Sai' }
{ Name: 'Chaitanya' }
{ Name: 'Madhu' }
{ Name: 'Hari' }
{ Name: 'Pradeep' }
{ Name: 'Pushpak' }
{ Name: 'Vamsi' }


{ Name: 'Sai' }
{ Name: 'Chaitanya' }
{ Name: 'Madhu' }
{ Name: 'Hari' }
{ Name: 'Pradeep' }
{ Name: 'Pushpak' }
{ Name: 'Vamsi' }


{ Name: 'Sai' }
{ Name: 'Chaitanya' }
{ Name: 'Madhu' }
{ Name: 'Hari' }
{ Name: 'Pradeep' }
{ Name: 'Pushpak' }
{ Name: 'Vamsi' }

