var http = require('http');

http.createServer( (req, res) => {
 
  res.end('hello world\n');
  console.log("server started");
 
}).listen(8000);

------------------------------------------

F:\js\week_2>node http.js
server started
server started
