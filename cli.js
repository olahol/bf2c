#!/usr/bin/env node
var fs = require("fs");
var bf2c = require("./");

var inputFile = process.argv[2];
var memory = process.argv[3];
var code = "";

if (inputFile) {
  code = bf2c(fs.readFileSync(inputFile, "utf8"), memory);
  console.log(code);
} else {
  console.log("bf2c <input file>");
}
