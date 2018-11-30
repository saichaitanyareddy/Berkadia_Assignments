setTimeout:setTimeout is used to execute a callback function after some delay.
	This is similar to executing a function after completions of handling all current instructions.
	The callback function in setTimeout will get executed only once.

setInterval:setInterval is similar to setTimeout except that it executes the callback function after certain Interval of time.
	It goes on executing the callback function after regular Intevral of times.

clearInterval:clearInterval is required to stop the execution of setInterval otherwise it setInterval doesn't stops execution.

setImmediate:setImmediate is used to execute a function immediately after all current instructions are handled.

when the delay in the setTimeout and setInterval is set to 0 then these function will be executed in the sequence in which these functions are called.




(function(){
	
	setTimeout(function(err,data)
		{
			console.log("setTimeout Executed");
		},500);
	
	var count=0;
	var Id=setInterval(function(err,data){
		count=count+1;
		console.log("Interval");
		if(count==5)
		{
			console.log("clearInterval is executed");
			clearInterval(Id);
		}
		},500);
	setImmediate(function(err,data)
		{
			console.log("setImmediate");
		});
	
})();

-----------------------------------------------------
cmd>node Timing_events.js
setImmediate
setTimeout Executed
Interval
Interval
Interval
Interval
Interval
clearInterval is executed

