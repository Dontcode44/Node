const math = require('./math.js');
var colors = require('colors');
const os = require('os')

console.log(math);
/*
console.log(math.add(8, 2));
console.log(math.divide(8, 0));
console.log(math.multiply(8, 0));
console.log(math.rest(8, 2));
*/
/*To use the "colors" library from npm, you should use another parenthesis*/
console.log(("The result of the rest operation, is: " + math.rest(2, 5)).yellow);
console.table(("The result of the rest operation, is: " + math.rest(2, 5)).yellow);
const person = {
    name: 'Miguel',
    twitter: 'midudev',
    frontend: true
}
/*Another way to print, but in this time, in table format*/
console.table(person);
console.log(person);
