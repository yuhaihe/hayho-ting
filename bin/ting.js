#!/usr/bin/env node

const tinify = require("tinify");
const fs = require("fs");
const path = require("path");

const argv = process.argv.slice(2);
const targetDir = argv[0];
const key = argv[1]; 

if (!targetDir) {
  console.log("\x1B[31m%s\x1B[0m", "请传入需要转换的文件夹或图片");
  return;
}
tinify.key = key || "NQZz7VPvrjfGBPpPSnH6DMXQ690z30jQ";

let count = 0;
const replaceImg = (filePath) => {
  const source = tinify.fromFile(filePath);
  source.toFile(filePath);
  console.log(filePath)
  count++;
}

const readDir = (target, file) => {
  const extname = path.extname(file);
  if (extname === ".png" || extname === ".jpg" || extname === ".jpeg") {
    replaceImg(path.join(target, file))
    return;
  }

  const currentDir = path.join(target, file);
  const isDir = fs.statSync(currentDir).isDirectory();
  if (isDir) {
    const filenames = fs.readdirSync(currentDir);
    filenames.forEach((file) => {
      readDir(currentDir, file)
    })
  }
}

const filenames = fs.readdirSync(targetDir);
filenames.forEach((file) => {
  readDir(targetDir, file)
})

console.log("\x1B[32m%s\x1B[0m", `压缩成功, 共压缩${count}张图片`)