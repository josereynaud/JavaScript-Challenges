let readlineSync = require('readline-sync');

let input = parseInt(readlineSync.question('How many digits of FooBar shall I produce: '));

for (let iteration = 1; iteration <= input; iteration++) {
    if (iteration % 3 == 0 && iteration % 5 == 0) {
        console.log(`${iteration}: Foobar`);
    } else if ((iteration % 3 == 0)) {
        console.log(`${iteration}: Foo`);
    } else if ((iteration % 5 == 0)) {
        console.log(`${iteration}: Bar`);
    } else {
        console.log(`${iteration}: ${iteration}`);
    };
};