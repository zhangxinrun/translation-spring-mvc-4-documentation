let qiniu = require("qiniu");
let fs = require('fs');
let glob = require('glob');
let crypto = require('crypto-js')

let accessKey = process.argv.slice(2);
let secretKey = process.argv.slice(3);