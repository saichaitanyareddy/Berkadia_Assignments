EventEmitter:EventEmitter is a class.It lies in the events module.

When an EventEmitter instance faces any error, it emits an 'error' event. 
When a new listener is added, 'newListener' event is fired and when a listener is removed, 'removeListener' event is fired.

EventEmitter has following properties:
	'on' property is used to bind a function with the event.
	'emit' is used to fire an event. 

Methods:
	addListener(event, listener)
	on(event, listener)
	once(event, listener)
	removeListener(event, listener)
	removeAllListeners([event])
	setMaxListeners(n)
	listeners(event)
	emit(event, [arg1], [arg2], [...])

Example:
var event=require('events');
var emitter=new event();

emitter.on("message",function(){
	console.log("message emitted");
});
emitter.emit("message");

----------------------------------------------------------------
cmd>node EventEmitter.js
message emitted

