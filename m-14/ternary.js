//Ternary Condition
//condition?
// let age = 112;
// age >= 18?console.log('vote dio') : console.log('Ghumai thako')
// let price =500;
// let isLeader = false;
// if (isLeader===true) {
//     price=0;    
// }
// else{
//     price =price +100;
// }
// console.log(price);
// price= isLeader===true? 0 : price +100;
// if (isLeader===true) {
//     if(price>1000){
//         price =price/2
//     } 
//     else{
//         price =0;
//     }
// } else {
//     price =price+1000;
// }
//ternaery
// tobe simple er jonne ternary valo

//M-14-9
// let isLeader= true;
// if (isLeader) {
//     console.log('vitore asba')
// }
// else{
//     console.log('vitore asba na')
// }

// let isLeader= true;
// if (!isLeader) {
//     console.log('vitore asba')
// }
// else{
//     console.log('vitore asba na')
// }
// let price = 500;
// if (price>500) {
//     console.log('free coke');
// } else {
//     console.log('coke 30tk');
// }
/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
// let weightKg =19;
// let heightM=1;
// BMI= weightKg/(heightM*heightM);
// if (BMI<18.5) {
//     console.log('you are underweight.');
// }else if(BMI>=18.5 && BMI<=24.9){
//         console.log('you are normal.');
// }else if(BMI>=25 && BMI<=29.9){
//         console.log('you are overweight.');
// }
// else {
//     console.log('you are obese.');
// }

//3 no
  /***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
// let score = 65;
// let grade;
// if (score>=90 && score<=100) {
//     grade = 'A';
// } else if(score>=80 && score<=89) {
//     grade = 'B';
// }else if(score>=70 && score<=79) {
//     grade = 'C';
// }else if(score>=60 && score<=69) {
//     grade = 'D';
// }else if(score>=0 && score<=59) {
//     grade = 'F';
// }
// else{
//     grade= "Invalid score"
// }
// console.log('grade:', grade);
//04 No
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
// let score = 39;
// if (score>80) {
//     console.log('go for a lunch')
// } else if (score<80 && score>=60) {
//     console.log('good luck next time.')
// }else if (score<60 && score>=40) {
//     console.log('friendsmessage unseen.')
// }else if (score<40) {
//     console.log('block your friend.')
// }
// else {
    
// }



/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
let num1=10;
let num2= 112;
let result;
if (num1>num2) {
    console.log(result=num1*2);
} else {
    console.log(result=num1+num2);
}
num1>num2? console.log(result=num1*2): console.log(result=num1+num2);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let fare = 800;
let age;
let Students;
if (age<10) {
    console.log('free');
} else if (age<10) {
    console.log('free');
} 
else {
    
}