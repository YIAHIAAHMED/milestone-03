function getMaxMin(numbers) {
    let min = numbers[0];
    for (let num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

let numbers = [51,22, 11, 8, 2,18];
let minimum = getMaxMin(numbers);
console.log("Minimum number is:", minimum);



//Short cut
// let numbers = [3, 5, 111, 82, 2];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log("Maximum number is:", max);
// console.log("Minimum number is:", min);

function woodQuantity(chairCount, tableCount, bedCount) {
    const woodPerChair = 1;
    const woodPerTable = 3;
    const woodPerBed = 5;
    const chairTotalWood = chairCount * woodPerChair;
    const tableTotalWood = tableCount * woodPerTable;
    const bedTotalWood = bedCount * woodPerBed;
    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

let wood = woodQuantity(22, 11, 11);
console.log("Total wood required:", wood, "cubic feet");


// Cheapest phone
function cheapestPhone(mobileList) {
    let cheapest = mobileList[0];
    for (let mobile of mobileList) {
        if (mobile.price < cheapest.price) {
            cheapest = mobile;
        }
    }
    return cheapest;

}

let mobiles = [
    { name: "Samsung", price: 2000, camera: 12, storage: "128GB" },
    { name: "iPhone", price: 82000, camera: 12, storage: "256GB" },
    { name: "Walton", price: 10000, camera: 8, storage: "64GB" },
    { name: "Nokia", price: 15000, camera: 10, storage: "32GB" },
    { name: "Xiaomi", price: 18000, camera: 12, storage: "128GB" }
];
let cheapest = cheapestPhone(mobiles);
console.log("Cheapest phone is:", cheapest);

//Module 19-5 Total costs of shopping cart
// function getShoppingTotal(products) {
//     let total = 0;
//     for (let product of products){
//         total = total + product.price;
//     }
//     return total;
// }

// let products = [
//     {name: 'shampoo', price: 120},
//     {name: 'soap', price: 800},
//     {name: 'toothpaste', price: 150},
//     {name: 'perfume', price: 300}   
// ]
// let total = getShoppingTotal(products);
// console.log("Total shopping cost is:", total);

function getShoppingTotal(products) {
    let total = 0;
    for (let product of products) {
        productCost = product.price * product.quantity;
        total = total + productCost;
    }
    return total;
}


let products = [
    { name: 'shampoo', price: 120, quantity: 4 },
    { name: 'soap', price: 800, quantity: 1 },
    { name: 'toothpaste', price: 150, quantity: 3 },
    { name: 'perfume', price: 300, quantity: 1 }
]
let total = getShoppingTotal(products);
console.log("Total shopping cost is:", total);

// Module 19-6 Multi-layer discount price calculation

// function discountedPrice(quantity){
//     if (quantity <= 100) {
//         let total = quantity*100;
//         return total;
//     }
//     else if (quantity <= 200) {
//     let total = quantity*100;
//     return total;
//     }
//     else {
//         let total = quantity*70;
//         return total;
//     }
// }

// let total2 = discountedPrice(250);
// console.log("Total price after discount is:", total2);

function discountedPrice(quantity) {
    let first100Price = 100;
    let second100Price = 90;
    let restPrice = 70;
    if (quantity <= 100) {
        let total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200) {
        let first100 = 100 * first100Price;
        let rest = quantity - 100;
        let second100 = rest * second100Price;
        let total = first100 + second100;
        return total;
    }
    else {
        let first100 = 100 * first100Price;
        let second100 = 100 * second100Price;
        rest = quantity - 200;
        let restTotal = rest * restPrice;
        let total = first100 + second100 + restTotal;
        return total;
    }
}

let total2 = discountedPrice(120);
console.log("Total price after discount is:", total2);

// Module 19-7 calculator to call functions

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function calculator(a, b, operator) {
    if (operator === "add") {
        return add(a, b);
    }
    else if (operator === "subtract") {
        return subtract(a, b);
    }
    else if (operator === "multiply") {
        return multiply(a, b);
    }
    else if (operator === "divide") {
        return divide(a, b);
    }
    else {
        return "operator is not allowed";
    }
}
let result = calculator(20, 10, "divide");
console.log("Result is:", result);

// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
Math.min(...heights2);
console.log("Lowest height is:", Math.min(...heights2));


// Find the friend with the smallest name.
const heights3 = ['rahim', 'robin', 'rafi', 'ronna', 'rashed'];
let smallestName = heights3[0];
for (let name of heights3) {
    if (name.length < smallestName.length) {    
        smallestName = name;
    }
}
console.log("Smallest name is:", smallestName);


// Your task is to calculate the total budget required to buy electronics:

    // laptop = 35000 tk
    // tablet = 15000 tk
    // mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptopCount, tabletCount, mobileCount) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    const totalLaptopCost = laptopCount * laptopPrice;
    const totalTabletCost = tabletCount * tabletPrice;
    const totalMobileCost = mobileCount * mobilePrice;
    const totalBudget = totalLaptopCost + totalTabletCost + totalMobileCost;
    return totalBudget;
}

let totalBudget = calculateElectronicsBudget(1, 1, 1);
console.log("Total electronics budget is:", totalBudget, "tk");


// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

function findAveragePhonePrice(phoneList) {
    let totalPrice = 0;
    for (let phone of phoneList) {
        totalPrice += phone.price;
    }
    let averagePrice = totalPrice / phoneList.length;
    return averagePrice;
}

    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 100000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
let averagePrice = findAveragePhonePrice(phones);
console.log("Average phone price is:", averagePrice, "tk");

function isStrongPassword(password) {
    const strongRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return strongRegex.test(password);
}

// Test
console.log(isStrongPassword("abc@1234")); // true
// console.log(isStrongPassword("abc123"));   // false
