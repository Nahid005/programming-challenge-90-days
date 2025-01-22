// Fundamentals of Javascript

/**
 * Javascript Arithmetic Operators 
 *  -Addition 
 *  -Subtraction
 *  -Multiplication
 *  -Division
 *  -Modulas
 */

const sumNum = 10 + 20;
console.log('Addition Operation of javascript', sumNum);

const subNum = 10 - 20;
console.log('Subtraction Operation of Javascirpt', subNum);

const multiplicationNum = 10 * 20;
console.log('Multiplication Operation of Javascript', multiplicationNum);

const divNum = 10 / 20;
console.log('Division Operation of Javascript', divNum);

const modNum = 10 % 20;
console.log('Modulas Operation of Javascript', modNum);

/**
 * Javascript Assignment Operators
 */

const greet = 'Hello'; // assign value using assignment operator 
const name = "Nahid Hassan";

const greeting = greet + ' ' + name;
console.log(greeting);

// let x = 10;
// x += 20;
// console.log(x);

/**
 * Javascript Comparision Operators
 *  -Less than sign
 *  -Greater than sign
 *  -Double equal sign
 *  -Triple equal sign
 *  -Less than equal sign
 *  -Greater than equal sign 
 */

let x = 30;
let y = 10;

let result;

//less than sign 
result = x < y;

//greater than sign
result = x > y;

//double equal sign
result = x == y;

//triple equal sign
result = x === y;

//less than equal sign 
result = x <= y;

//greater than equal sign
result = x >= y;

console.log(result);

/**
 * Logical Operator of Javascript
 *  -And Operator 
 *  -Or Operator
 *  -Not Operator 
 */

//And Operator of Javascript 

const str = "Hello";
const str1 = "Hellco";

console.log(str == str1);



let data = 7
while(data>=0){
    if (data<=5){
        data--;
        continue;
    }
    console.log(data);
    data--;
}
