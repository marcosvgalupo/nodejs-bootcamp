const fs = require('fs');

const pathIn = "./txt/input.txt";
const pathOut = "./txt/output.txt"

//synchronous version of file reading
const textIn = fs.readFileSync(pathIn, "utf-8");
console.log(textIn);

const textOut = `this is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync(pathOut, textOut);

consoler.log("File written!!");