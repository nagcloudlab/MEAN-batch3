const http = require("node:http");
const fs = require("node:fs");

const httpServer = http.createServer(); // EE
httpServer.on("request", (req, res) => {
  console.log("New Request...");
  const readStream = fs.createReadStream("./ppt/node.pdf");
  res.writeHead(200, { "Content-Type": "application/pdf" });
  readStream.pipe(res);
});

httpServer.listen(3000, () => {
  console.log("server-up");
});
