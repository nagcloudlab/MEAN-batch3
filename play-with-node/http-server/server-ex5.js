const http = require("node:http");
const fs = require("node:fs");

const httpServer = http.createServer(); // EE
httpServer.on("request", (req, res) => {
  console.log("New Request...");
  // computation..
  let i = 0;
  while (i < 10000000000) {
    i++;
  }
  res.end("i=" + i);
});

httpServer.listen(3000, () => {
  console.log("server-up");
});
