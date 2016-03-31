# bf2c

> Compile Brainfuck to C.

## Install

```bash
$ npm i bf2c
```

## Examples

##### CLI

```bash
$ bf2c examples/hello.b > hello.c && gcc hello.c && ./a.out
Hello World!
```

##### Module

```javascript
var bf2c = require("bf2c");
var code = bf2c("+++++++++++++.");
```
