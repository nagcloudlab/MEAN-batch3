// const fs = require("node:fs");
// fs.readFile("./menu.txt", (err, data) => {
//   console.log(data.toString("utf8"));
//   //..
//   //..
// });

// const fs = require("node:fs/promises");
// async function getMenu() {
//   const data = await fs.readFile("./menu.txt");
//   console.log(data.toString("utf8"));
// }
// getMenu();

// console.log("do something else..");

const { unlink } = require("node:fs/promises");

(async function (path) {
  try {
    await unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error("there was an error:", error.message);
  }
})("/tmp/hello");

//--------------------------------------------------------------
