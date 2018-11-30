Undefined:When a variable is declared but no value is assigned to it then a variable is said to be undefined.
	Default value of variable is undefined.
	undefined is assigned in following cases:
		1)Declared but not defined.
		2)Array index or object property that does not exist.
		3)A function parameter that has not been supplied.
		4)The return value of functions that have to but don’t return a value.


var a;
console.log(a);
-----------------------------------------------------------------
cmd>node null_vs_undefined_vs_undeclared.js
undefined


Null:null is a value that can be assigned to a variable.
     null is  a object value.


var a=null;
console.log(a);
------------------------------------------------------------------
cmd>node null_vs_undefined_vs_undeclared.js
null

The main difference between null and undefined is when they are used in arithmetic operations

var num=10;
num+=null;
console.log(num);
--------------------

cmd>node null_vs_undefined_vs_undeclared.js
10

var num=10;
num+=undefined;
console.log(num);
------------------------

cmd>node null_vs_undefined_vs_undeclared.js
NaN


Undeclared:If we are using a variable without declaring it in the program then the variable is said to be undeclared.
	If assign a variable to a value without declaring it using 'var' keyword then these variables are global variables.
	If we do the same thing in strict mode then it show a ReferenceError.

	Declared variables are constrained in the execution context in which they are declared. 
	Undeclared variables are always global.
	Assigning a value to an undeclared variable implicitly creates it as a global variable.

	Strict mode makes several changes to normal JavaScript semantics:

		1)Eliminates some JavaScript silent errors by changing them to throw errors.
		2)Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
		3)Prohibits some syntax likely to be defined in future versions of ECMAScript.


'use strict';
num=10;
console.log(num); 
------------------------
cmd>node null_vs_undefined_vs_undeclared.js
cmd\null_vs_undefined_vs_undeclared.js:21
num=10;
   ^

ReferenceError: num is not defined
    at Object.<anonymous> (cmd\null_vs_undefined_vs_undeclared.js:21:4)

    at Module._compile (internal/modules/cjs/loader.js:688:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
    at startup (internal/bootstrap/node.js:285:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)




num=10;
console.log(num);
--------------------------------------
cmd>node null_vs_undefined_vs_undeclared.js
10

