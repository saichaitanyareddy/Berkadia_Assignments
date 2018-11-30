//(1)creating object by using object method
var person =new Object();
person.Name="Sai";
person.College="Vardhaman";
console.log(person);
-------------------------------

cmd>node Objects.js
{ Name: 'Sai', College: 'Vardhaman' }

//(2)Creating object using Literals
var person={ Name:"sai", College:"Vardhaman"};
console.log(person);

-------------------------------------------
cmd>node Objects.js
{ Name: 'sai', College: 'Vardhaman' }


//(3)creating objects using factory function
//The Factory function allows to encapsulate and re-use the logic for creating similar objects.

var Person=function(name,college){
				var result=new Object();
				result.Name=name;
				result.College=college;
				return result;
				};
var p1=Person("Sai","Vardhaman");
console.log(p1);
------------------------------------------------------------------------------------------------

cmd>node Objects.js
{ Name: 'Sai', College: 'Vardhaman' }

//(4)creating objects using function constructor
//Each time we need to pass the parameters for creating new object

function Person(name,college){
				var result=new Object();
				result.Name=name;
				result.College=college;
				return result;
				};
var p1=Person("Sai","Vardhaman");

console.log(p1);
------------------------------------------------------------

cmd>node Objects.js
{ Name: 'Sai', College: 'Vardhaman' }

//(5)creating objects using Prototype
//Prototype inherits the function and all the objects created using function will have additional fields specified in the Prototype.
function Person(){};
Person.prototype.Name="Sai";
Person.prototype.College="Vardhaman";


var p1=new Person();
console.log(p1.Name);
console.log(p1.College);
------------------------------------------
cmd>node Objects.js
Sai
Vardhaman


//(6)creating objects using Function and Prototype combination
//we can take the advantage of creating new objects by combination of functions and protype
//for example each student may have a diferent name but studnets within same college have same college name.
//so we create name using function and college name can be automatically added to student using prototype.
function Person(name){
	this.Name=name;	
	return this.Name;
};

Person.prototype.College="Vardhaman";


var p1=new Person("Sai");

console.log(p1.Name);
console.log(p1.College);
----------------------------------------------------------------

cmd>node Objects.js
Sai
Vardhaman


//(7)creating Singleton in javascript
//Singleton in Javascript is as simple as defining and invoking the constructor at the same time.
var singleton=new function(){
		this.Name="Sai";
		this.College="Vardhaman";
};

console.log(singleton);
---------------------------------------------------------------------------------------------------

cmd>node Objects.js
{ Name: 'Sai', College: 'Vardhaman' }
















