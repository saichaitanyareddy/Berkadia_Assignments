IIFE stands for Immediately-Invoked Function Expression.
	Immediately-invoked function expressions can be used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function. 
	This concept has been referred to as a self-executing anonymous function

	we write IIFE code enclosed between Parenthesis inorder to differentiate between function declaration and function expression.

	we write a IIFE in a number of ways as follows:
		(function(){})();
		(function(){}());
		(()=>{})();
		!function(){}();
		~function(){}();
		-function(){}();
		+function(){}();
		void function(){}();


//IIFE that takes parameters
(function(a,b){
	var mul=a*b;
	console.log("the multiplication of two numbers is",mul);
})(3,3);

//IIFE without parameters
(function(){
	var msg="hello";
	console.log(msg);
})();

//IIFE using arrow function with parameters
((a,b)=>{ 
	var mul=a*b;
	console.log("The multiplication of two number is",mul);
})(3,3);

//IIFE using arrow function without parameters
(()=>{
	var msg="Good morning";
	console.log(msg);
})();

//IIFE in different ways

(function(a,b){
	var mul=a*b;
	console.log("the multiplication of two numbers is",mul);
}(2,3));

!function(a,b){
	var mul=a*b;
	console.log("the multiplication of two numbers is",mul);
}(2,6);

~function(a,b){
	var mul=a*b;
	console.log("the multiplication of two numbers is",mul);
}(2,9);

-function(a,b){
	var mul=a*b;
	console.log("the multiplication of two numbers is",mul);
}(2,18);

+function(a,b){
	var mul=a*b;
	console.log("the multiplication of two numbers is",mul);
}(3,3);

void function(a,b){
	var mul=a*b;
	console.log("the multiplication of two numbers is",mul);
}(10,9);

	
----------------------------------------------------------------------


cmd>node IIFE.js
the multiplication of two numbers is 9
hello
The multiplication of two number is 9
Good morning
the multiplication of two numbers is 6
the multiplication of two numbers is 12
the multiplication of two numbers is 18
the multiplication of two numbers is 36
the multiplication of two numbers is 9
the multiplication of two numbers is 90



