Inheritance:Inheritance is the property of accquiring attributes and operations from parent along with it's own properties.


class A
{
	A(name){
		
		console.log(name);
		};
}
class B extends A
{
	Show(){console.log("Hello");};
	
	
	
}
var user=new B();	
user.Show();
user.A("Sai");
-----------------------------------------------------
cmd>node inheritance.js
Hello
Sai

