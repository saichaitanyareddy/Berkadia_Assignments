Call():
	Call() can invoke a method of another object.
	In JavaScript all functions are object methods.
	we can pass parameters to the call function.


var Student={fullName:function(fName){
		return this.fName;
	}
};
var s1={
	fName:"Sai"
	};
console.log(Student.fullName.call(s1));
--------------------------------------------------
cmd>node Call_Apply_Bind.js
Sai


Apply:
	Instead of sending each parameter we can send a array of parameters.
	apply applies the parameters to the function.


var Student={fullName:function(a,b){
		return this.fName+","+ a+" "+b;
	}
};
var s1={
	fName:"Sai"
	};
var arr=["hii","Node"];
console.log(Student.fullName.apply(s1,arr));
--------------------------------------------------
F:\js\Week_3>node Call_Apply_Bind.js
Sai,hii Node


JavaScript arrays do not have a max() method, we can apply the Math.max() method instead

Math.max.apply(null,[1,2,3]);
return the maximum element in the array.


Bind:
	Bind() returns a bound function which will be executed later.
	We pass the parameters to the returned bound function.


var Student={fullName:function(a,b){
		return this.fName+","+ a+" "+b+" ";
	}
};
var s1={
	fName:"Sai"
	};

var Name=Student.fullName.bind(s1);
console.log(Name("hii","Node"));
--------------------------------------------------
F:\js\Week_3>node Call_Apply_Bind.js
Sai,hii Node
