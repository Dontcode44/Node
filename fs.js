const fs = require('fs')

/*On this method, in the second parameter, should specify the format to return,
if not specify, the program return the buffer of the file*/
const first = fs.readFileSync('./Data/first.txt', 'utf-8')
const second = fs.readFileSync('./Data/second.txt')

console.log(first);
/*This is the file, but with the buffer description, too can use the .toString()
And you can see the content in String format*/
console.log(second);