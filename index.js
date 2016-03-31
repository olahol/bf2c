var util = require("util");

var INS = {
  ">": "++p;",
  "<": "--p;",
  "+": "++*p;",
  "-": "--*p;",
  ".": "putchar(*p);",
  ",": "*p=getchar();",
  "[": "while (*p) {",
  "]": "}"
};

var PROGRAM = "int main() { char a[%d] = {0}; char *p=a; %s; return 0; }";

var compile = module.exports = function (input, mem) {
  mem = mem || 30000;
  var ins = input.split("").map(function(c) { return INS[c] || ""; }).join("");
  return util.format(PROGRAM, mem, ins);
};
