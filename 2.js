// // var value = "some value";
// // value = 'some other value';
// // let name = "john";
// // name = 'CharuNishant';
// // const lastName = "Jordan";
// // lastName = 'NC';

// // console.log(value, name, lastName);

// // "" or '' depends on you bhai what you want to use..

// // const name = "john\'s";
// // console.log(name);

// // string concatenation- combine string values
// // `` - backticks (template strings) easier option

// const name1 = 'john';
// const lastName = "Singh";

// let fullName = name1 + ' ' + lastName;

// console.log("Hello my full name is:" + fullName);

// const website = 'google';
// const url = 'https://www.' + website + '.com'
// console.log(url);

// const number = 34;
// let pants = "2.458765432";
// pants = 'are great';
// const number2 = 2.456;

// console.log(pants, number);

// let number = 40;
// number += 5;
// number -= 5;

// Implicit Type Conversion.

// const name = 'john';
// const lastName = 'jordan';
// const fullName = name + ' ' + lastName;
// console.log(fullName)

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = name - lastName;
// console.log(value);

// const number4 = '32';
// const number3 = 10;

// // 100 lines of code
// number4 = 'pants';
// const result2 = number4 + number3;
// console.log(result2);

// Data types - 7 total
// primitive - String , Number, Boolean, Null, Undefines, symbol
// Øbject - Arrrays , function, objects 

// type of - operator (typeof Variable) (typeof Value)

// // string
// const text = 'some text';
// // Number

// // Boolean

// // Null

// // undefinde

// // symbol(ES6)

// console.log(typeof text)

// Arrays , functions, and objects
// Arrays = [], 0 based indexing.

// const friend1 = 'anna';
// const friend2 = 'anna';
// const friend3 = 'anna';
// const friend4 = 'anna';

// const friends = ['anna', 'anna', 'anna', 'anna', 45, undefined, null];
// console.log(friends);

// function hello(){
//     // setup the logic
//     console.log("Hello World1..")
//     console.log("Hello World2..")
//     console.log("Hello World3..")
// }

// hello();

// placeholders , local vars
// arguments - when invoke/ call/ run
// use vars/ values , multiple params, undefined

// function greet(name){
//     console.log('Hello there ' + Marriage[1] + ' and '+ Marriage[0]);
// }

// let Marriage = ['Nishant', 'Charu', 'NC', 'Love'];

// greet(Marriage);

// Return
// 1 inch == 2.54cm;
// const wallHeight = 80;
// const wallWidth = 100;
// function calculate(value){
//    const newValue = value*2.54;

//    return newValue;
// }

// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width, height];
// console.log(dimensions);

// // value();

// const multiply = (num1, num2) => {
//         product = num1*num2;
//         return  product;
// }

// multiply(34,56)
// console.log(product);

// const person = {
//     name: 'john',
//     lastName: 'Peters',
//     age: 40,
//     education: false,
//     married: true,
//     siblings: ['anna', 'nanna', 'michael'],
//     greeting: function(){
//         console.log("hello There " + this.name);
//     },
// };

// // greeting();
// console.log(person.name);
// console.log(person.siblings[2])
// person.greeting();

// const dice = 8;

// switch(dice){
//     case 1:
//         console.log('you got one');
//         break;

//     case 2:
//         console.log('you got two');
//         break;
    
//     case 3:
//         console.log('you got three');
//         break;
//         default:
//             console.log('you did not roll the dice');

// }

// if(dice === 1){
//     console.log('you got one');
// }

// else if(dice ===2){
//     console.log('you got two');
// }
// else{
//     console.log('you did not roll the dice');
// }
// if(dice === 1){
//     console.log('you got one');
// }

// if(dice ===2){
//     console.log('you got two');
// }
// if(dice < 2 || dice>6){
//     console.log('you did not roll thd dice');
// }

// loops, repeated run a block of code while condition is true. while loop , turn off autosave.

// let amount = 10;

// while(amount>0){
//   console.log('I have ' + amount + ' rupeers and i am going to the mall ' );
//   amount--;
// }

// do while loop.
// let money = 12;

// do{
//     console.log('you have ' + money + 'dollars');
//     money++;
// }
// while(money<10);

// Loops , repeatedly run a block of code while condition is true 
//  for loop..


// for(let i = 0; i< 10; i++){
//     console.log('and the number is: ' + i)
// }

for(let number = 11; number >= 0; number--){
    console.log(`and the number is: ${number}`);
}