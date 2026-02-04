function getMaxMin(numbers) {
    let min = numbers[0];
    for (let num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

let numbers = [3, 51, 11, 8, 22];
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
