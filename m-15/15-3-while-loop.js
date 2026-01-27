// let num =1;
// while(num<100){
//     console.log(num);
//     num++;
// }

// let num =1;
// let sum =0;
// while(num <= 12){
//     console.log(num);
//     sum= sum + num;
//     console.log('sum:',sum);
//     num++;
// }


// let  num =1;
// while (num<=10) {
    // console.log(num);
//     if (num%2===0) {
//         console.log('even number', num);
//     }
// num ++;
// }

// for (let i=0; i<=15; i++){
//     console.log(i);
//     if (i>=6) {
//         break;
//     }
// }

// let n= 54;
// while(n>25){
//     console.log(n);
//     if (n<50) {
//         break;
//     }
//     n--;
// }

// for (let i =1; i<10; i++){
//     if (i%2===0) {
//         continue;
//     }
//     console.log(i);
// }

// let n =0;
// while (n<15) {
//     n++;
//     if (n%5 !==0) {
//         continue;
//     }
//     console.log(n);
// }

// for (let i = 0; i < 5; i+=3) {
//  console.log(i);
// }

// let count = 0;

// while (count < 3) {
//   console.log("Hello");
//   count++;
// }


// Write a loop 1 to 200. Use break to exit the loop once you find 100.
for(let i=1; i<200; i++){
  if (i>100) {
    break;
  }
  // console.log(i);
}

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
// let n= 1;
// let sum =0;
// while(n<100){
//   sum =sum+n;
//   console.log(n);
//   if (sum>100) {
//     console.log(sum);
//     break;
//   }
//   n++;
// }


// 
// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
// 

for (let i=2; i<=100; i++){
  if (Number.isInteger(Math.sqrt(i))) {
    console.log(i);
    break;
  }
  
}
