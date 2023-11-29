const http = require("node:http");

const httpServer = http.createServer(); // EE
httpServer.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello client, Welcome to Node.js");
  res.end();
});

httpServer.listen(3000, () => {
  console.log("server-up");
});
