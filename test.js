const fs = require("fs");
const path = require("path");

const index = path.join(__dirname, "index.js");
const image = path.join(__dirname, "image");

console.log('index.js', fs.statSync(index).isDirectory())
console.log('image', fs.statSync(image).isDirectory())
