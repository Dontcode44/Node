const fs = require('fs');

/*Now, here, we can see the async functions, there are very used*/
fs.readFile('./Data1/firstt.txt', 'utf-8', (data, error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});