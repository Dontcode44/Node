/*The promises are in 'fs' module, so, we can use
this like*/

const {readFile} = require('fs/promises')

async function read() {
    try {
        const read1 = await readFile('./Data/first.txt', 'utf-8');
        console.log(read1);
        const read2 = await readFile('./Data/second.txt', 'utf-8');
        console.log(read2);
        const read3 = await readFile('./Data/third.txt', 'utf-8');
        console.log(read3);
        const read4 = await readFile('./Data/fourth.txt', 'utf-8');
        console.log(read4);
    } catch (error) {
        console.log(error);
    }
}

read();
