Closure:
	A closure is a function having access to the parent scope, even after the parent function has closed.
	Closure is useful in hiding implementation detail in JavaScript.
	It can be useful to create private variables or functions.
	

function Addition(num1)
{
	
	var number1=num1;
	function Adding(num2)
	{
		return number1+num2;
	}
	return Adding;
}
var ADD=Addition(1);

console.log(ADD(2));
---------------------------------------

cmd>node Closure.js
3

In the above example,Addition(1) return Adding to the ADD variable.
ADD variable now reference the Adding function,not the Addition function.
when we call ADD,it can access the num1 variable which is declared outside Adding function. 



	
	



