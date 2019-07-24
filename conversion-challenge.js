let readlineSync = require('readline-sync');

let degrees = readlineSync.question('Enter degrees in Celsius: ');
let degreesNum = Number(degrees);

//  Conversion Formula
//  Fahrenheit = 1.8 * Celsius + 32

function convertFromCtoF(celciusInput) {
    let convertedDegrees = celciusInput * 1.8 + 32;
    return convertedDegrees;
}

function convertFromFtoC(fahrenheitInput) {
    let convertedDegrees = (fahrenheitInput - 32) / 1.8;
    return convertedDegrees;
}

console.log('It is ' + convertFromCtoF(degreesNum) + ' degrees Fahrenheit!');

degrees = readlineSync.question('Enter degrees in Fahrenheit: ');
degreesNum = Number(degrees);

console.log('It is ' + convertFromFtoC(degreesNum) + ' degrees Fahrenheit!');