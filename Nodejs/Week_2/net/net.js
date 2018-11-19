var net=require('net');
var readline=require('readline-sync');
var address=readline.question("enter IP address to validate");

if(net.isIP(address))
{
	console.log("The given value is valid Ip");
}
else
{
	console.log("The given value is not a valid IP");
}
-----------------------------------------------------------------------


F:\js\week_2>node net.js
enter IP address to validate198.168.0.1
The given value is valid Ip

