const fs = require('fs')

/*On this method, in the second parameter, should specify the format to return,
if not specify, the program return the buffer of the file*/
const first = fs.readFileSync('./Data/first.txt', 'utf-8')
const second = fs.readFileSync('./Data/second.txt')

console.log(first);
/*This is the file, but with the buffer description, too can use the .toString()
And you can see the content in String format*/
console.log(second);
/*Too use this library to create a file*/
fs.writeFileSync('./Data/third.txt', 'This is the third file');

const vars = 'This is my text'
/*Too, u can use the module to send the content of a variable*/
fs.writeFileSync('./Data/fourth.txt', vars);
const list = [1, 2, 3, 4, 5]
/*Even you should send a numbers, but in String format*/
fs.writeFileSync('./Data/fifth.txt', list.toString());

