const http = require('node:http');
// Workers can share any TCP connection
// In this case it is an HTTP server
http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(8000);

console.log(`Http-server (${process.pid}) started`);