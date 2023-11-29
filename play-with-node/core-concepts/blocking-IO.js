const fs = require("node:fs");

const menuData = fs.readFileSync("./menu.txt"); // 1s blocking IO
console.log(menuData.toString("utf-8"));

console.log("do something else..");
