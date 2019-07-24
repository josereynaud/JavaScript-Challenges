let readlineSync = require('readline-sync');

let numberInput = parseInt(readlineSync.question('Enter a number: '));
let ordinal = numberInput % 10;

function getOrdinal(numberInput, ordinal) {
    if (ordinal == 0 && numberInput == 0) {
        ordinal = "ERROR";
    } else if ((ordinal > 0 && ordinal <= 3) && (numberInput > 10 && numberInput <= 13)) {
        ordinal = "EXCEPTION";
    };
    switch (ordinal) {
        case 1:
            return `That's the ${numberInput}st item!`;
            break;
        case 2:
            return `That's the ${numberInput}nd item!`;
            break;
        case 3:
            return `That's the ${numberInput}rd item!`;
            break;
        case "ERROR":
            return "ERROR: Please enter a number greater than 0";
            break;
        case "EXCEPTION":
            return `That's the ${numberInput}th item!`;
            break;
        default:
            return `That's the ${numberInput}th item!`;
    };
};
console.log(getOrdinal(numberInput, ordinal));