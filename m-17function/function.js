// function square (number){
//     console.log(number);
//     let borgo = number*number;
//     console.log(borgo);
// }
// square(5);

// function add (num1, num2){
//     sum = num1 + num2;
//     console.log(sum);
// }
// add(5,10);

// function tenTimes(num3){
//     let result = num3*10;
//     return result;
// }
// let output = tenTimes(99);
// console.log('output:', output);

// // function evenSizesString(str){
// //     let size = str.length;
// //     // console.log(str, size);
// //     if (size%2===0) {
// //         console.log('even size');
// //         return true;
// //     }
// //     else{
// //         console.log('odd size');
// //         return false;
// //     }
    
// // }
// // evenSizesString('dhaka');
// // evenSizesString('Yiahia Ahmed');

// function add (num1, num2){
//     let sum = num1 + num2;
//     console.log('Summation:', sum);
// }
// let sum = add(440,35);

// function addAll (a, b, c, d, e){
//     let total = a + b + c + d + e;
//     console.log(total);
// }
// let total = addAll(10, 20, 30, 40, 50);

// function doubleIt(number){
//     let doubled = number * 2;
//     console.log(doubled);
// }
// doubleIt(20);


// function cutHalf (number){
//     let half = number/2;
//     return half;
    
// }
// let halfResult = cutHalf(32);
// console.log(halfResult);


// // Return Short cut

// function add (price1, price2){
//     return price1 + price2;
// }
// let added = add(20, 40);
// console.log('bill', added);

// function isEven(number){
//     if (number%2 ===0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isEven(21))

// function isOdd(number){
//     if (number%2 ===1) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isOdd(22));

// function evenSizedString(str){
//     let size = str.length;
//     console.log('string', size);
// }
// evenSizedString('faka');

function evenSizedString(str){
    let size = str.length;
    if (size%2===0) {
        // console.log('Even Size');
        return true;
    }
    else{
        // console.log('Odd Size');
        return false;
    }

}
console.log(evenSizedString('faka'));

// function douleOrTripple(number, doDouble){
//     if (doDouble===true) {
//         let result = number*2;
//         return result;
//     }
//     else{
//         let result = number*3;
//         return result;
//     }
// }

// console.log(douleOrTripple(5,false));

// function numberOfElements(numbers){
//     let len = numbers.length;
//     return len;
// }
// let len = numberOfElements([12, 12, 13, 24, 35,23]);
// console.log(len);

// function sumOfNumbers(numbers){
//     let sum = 0;
//     for (let number of numbers){
//         console.log(number);
//         sum = sum + number;
//     }
//     return sum;
// }
// numbers = [4, 2, 1, 7]
// let sum = sumOfNumbers(numbers)
// console.log(sum);

function evenOfNumbers(numbers){
    let even = [];
    for (let number of numbers){
        // console.log(number);
        if (number%2===0) {
            even.push(number);
        }
    }
    return even;
}
let numbers = [4, 2, 1, 7]
let evens = evenOfNumbers(numbers)
console.log(evens);