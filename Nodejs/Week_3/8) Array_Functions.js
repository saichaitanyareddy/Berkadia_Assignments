map:
	map applies function to each element in the array.
	map doesn't work until the array has elements.
	Inorder to apply map functions we need to fill the array first and then apply map().

Example:
var numbers=['1','2','3','4','5'];
console.log(numbers);
var cubes=numbers.map((x)=>{return x*x*x;});
console.log(cubes);

-------------------------------------------
cmd>node Array_Functions.js
[ '1', '2', '3', '4', '5' ]
[ 1, 8, 27, 64, 125 ]


fill:
	fill is used to fill the array with given element.

Example:
var numbers=[1,2,3,4,5];
console.log(numbers);
var cubes=numbers.fill(0);
console.log(cubes);
-----------------------------------------------

cmd>node Array_Functions.js
[ 1, 2, 3, 4, 5 ]
[ 0, 0, 0, 0, 0 ]

Reduce:
	Reduce is to calculate output using single value
	Reduce uses accumulator to perform operations.
	If we don't assign a accumulator to a value it starts from the first element in the array otherwise it starts from the assigned value.

Example:
var numbers=[1,2,3,4,5];
function sum(acc,numbers)
{
	acc+=numbers;
	return acc;
}
var ans=numbers.reduce(sum);
console.log(ans);
---------------------------------------------------

cmd>node Array_Functions.js
15

we can reduce to find minimum and maximum in the array.

var numbers=[1,2,3,4,5];
function max(acc,numbers)
{
	if(numbers>acc)
	{
		acc=numbers;
	}
	return acc;

}
var ans=numbers.reduce(max,0);
console.log(ans);

------------------------------------------------------
cmd>node Array_Functions.js
5

filter:
	filter() method creates a new array with all elements that pass the test implemented by the provided function.

Example:
var numbers=[1,2,3,4,5];
function Even(numbers){
	if(numbers%2==0)
	{
		return numbers;
	}
}
numbers=numbers.filter(Even);
console.log(numbers);
-------------------------------------------------------

cmd>node Array_Functions.js
[ 2, 4 ]





