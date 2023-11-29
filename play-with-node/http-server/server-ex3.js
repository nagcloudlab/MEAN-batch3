const http = require("node:http");
const fs = require("node:fs");

const httpServer = http.createServer(); // EE
httpServer.on("request", (req, res) => {
  console.log("New Request...");
  fs.readFile("./ppt/node.pdf", (err, fileData) => {
    res.writeHead(200, { "Content-Type": "application/pdf" });
    res.write(fileData);
    res.end();
    console.log("Response Sent..");
  });
});

httpServer.listen(3000, () => {
  console.log("server-up");
});
