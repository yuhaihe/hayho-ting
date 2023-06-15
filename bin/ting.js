#!/usr/bin/env node

const tinify = require("tinify");
const fs = require("fs");
const path = require("path");

// 接受参数
const argv = process.argv.slice(2);
const targetDir = argv[0]; // /Users/yuhaihe/Desktop/hayho/tiny-png/image
const key = argv[1]; // NQZz7VPvrjfGBPpPSnH6DMXQ690z30jQ

// 判断targetDir是否正确
if (!targetDir) {
  // 输出红色字体
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
  // 图片类型直接转换
  if (extname === ".png" || extname === ".jpg" || extname === ".jpeg") {
    replaceImg(path.join(target, file))
    return;
  }

  // 当前路径
  const currentDir = path.join(target, file);
  // 判断是否是文件夹
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

// 输出绿色字体
console.log("\x1B[32m%s\x1B[0m", `压缩成功, 共压缩${count}张图片`)