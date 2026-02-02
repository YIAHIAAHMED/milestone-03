// Unit convert inch to feet and miles to kilometer

function inchToFeet(inch) {
    let feet = inch / 12;
    return feet;
}

let feetResult = inchToFeet(28);
console.log("28 inches is equal to " + feetResult + " feet.");

// different way
function inchToFeet2(inch) {
    let feetFraction = inch / 12;
    let feetNmber = Math.floor(feetFraction);
    let inchRemaining = inch % 12;
    let result= feetNmber + " feet and " + inchRemaining + " inches";
    return result;
}
let feetResult2 = inchToFeet2(50);
console.log("50 inches is equal to " + feetResult2 + ".");

function milesToKilometer(miles) {
    let kilometer = miles * 1.60934;
    return kilometer;
}

let kilometerResult = milesToKilometer(5);
console.log("5 miles is equal to " + kilometerResult + " kilometers.");

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let isLeap = isLeapYear(1904);
console.log("Is 2020 a leap year? " + isLeap);

// Average odd numbers in an array
function averageOddNumbers(numbers){
    let odds = [];
    for (let number of numbers){
        if (number%2===1) {
            //console.log(number);
            odds.push(number);
        }
    }
    let sum=0;
    for (let number of odds){
        sum += number;
    }  
    let count = odds.length;
    console.log(sum, count);
    let average = sum / count;
    return average;  
}

let numbers = [111,2,333,4,5,6,777,8,9];
let averageOdd = averageOddNumbers(numbers);
console.log("The average of odd numbers is: " + averageOdd);

//Remove duplicate items from an array

function removeDuplicates(arr) {
    let unique= [];
    for (let item of arr){
        if (unique.includes(item)===false) {
            unique.push(item);
        }
    }
    return unique;

}

let biranyKhor = ['abul', 'kabul', 'abul', 'kabul','abul', 'habul'];
let uniqueNames = removeDuplicates(biranyKhor);
console.log("Unique names are: " + uniqueNames);


let min = Math.min(3, 5, 1, 8, -2);
console.log("The minimum value is: " + min);
let max = Math.max(3, 5, 1, 118, -2);
console.log("The maximum value is: " + max);

console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.floor(Math.random()*100));