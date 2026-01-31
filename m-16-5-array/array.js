// Write a JavaScript code to reverse the array colors without using the reverse method.
// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// let reversed=[];
// for (const color of colors){
    
//     reversed.unshift(color);
    
// }
// console.log(reversed);


let str = 'Programming';
// size check
 console.log(str.length);

// access specific character by index
 console.log(str[7]);

// compare two string
let str2 = 'Programming ';
console.log(str===str2);

// convert to capital or small
console.log(str.toUpperCase());
console.log(str.trim()===str2.trim());

// Slice
let bd ='I love Bangladesh';
console.log(bd.slice(2,12));

//include
console.log(bd.includes('Bangladesh'));

//concat 
let newStr = str.concat(str2);
console.log(newStr);
console.log(bd.replace('love', 'love very much'));

//split

let str1 = 'we love Programming and web development';
// let strArra = str1.split(' ');
// console.log(strArra);

// let reverseArr = strArra.reverse();
// console.log(reverseArr);

//Join 
// let reverseStr = reverseArr.join(' ');
let reverseStr = str1.split(' ').reverse().join(' ');
console.log(reverseStr);

// specific lette count

let string = 'we love to travel and watch movie';
let count = 0;
for(let i=0; i<string.length; i++){
    let letter = string[i];
    if (letter.toLowerCase()=='l') {
        count++;
    }
}
console.log(count);

// Object

let bike ={
    color: 'black',
    brand: 'Honda',
    cc: 160,
    pillion: 2,
    mileage: 35,
    isMeterDigital: true,
    advantages: ['less mileage', 'high speed', 'low configuration'],
    battery: {
        color: 'black',
        durability: 'strong',
    }
};
bike.isMeterDigital=false;
bike.cc = 300;
delete bike.brand;
// console.log(bike);
// console.log(bike.color);
// console.log(bike['mileage']);
console.log(bike.battery.durability);

//For loop in object

// for(let key in bike){
//     console.log(key, " ->", bike[key]);
// }
let bikeKeys = Object.keys(bike)
// console.log(Object.keys(bike).length);
console.log(bikeKeys.length);

for(i=0; i<bikeKeys.length; i++){
    //console.log(i);
    let key =bikeKeys[i];
    let value = bike[key]
    console.log(i, '->', key, ':', value);
}



// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

// let numbers = [12, 98, 5, 41, 23, 78, 46];

// if (numbers%2===0) {
//     let numbersAsc = [...numbers].sort(function(a,b){return a-b})
//     console.log(numbersAsc);
// }





