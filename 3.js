// // let text = 'Peter Jordan';

// // let result = text.length;
// // console.log(result);
// // console.log(text.length);
// // console.log(text.toLocaleLowerCase());
// // console.log(text.toUpperCase());

// // template literals 
// // backticks 
// // interpolation ${} - insert expression(value)

// // const name = 'john';
// // const age = 25;
// // const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';

// // const value = `Hey it's ${name} and he is ${age} years old.`
// // console.log(sentence);
// // console.log(value);

// // Array Properties and Methods
// let names = ['john', 'bobo', 'barry', 'olga', 'ben'];

// // length
// console.log(names.length);

// // concating the array
// const lastNames = ['pepper', 'chilli', 'bananna'];
// const allNames = names.concat(lastNames);
// console.log(allNames);
// console.log(allNames.reverse());

// // unshift 
// allNames.unshift('susy');
// allNames.unshift('anna');
// console.log(allNames);

// // shift 
// allNames.shift();
// allNames.shift();
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// // push
// allNames.unshift('susy');
// allNames.unshift('anna');
// console.log(allNames);

// // allNames.pop();
// // allNames.pop();
// // allNames.pop();
// // allNames.pop();
// // allNames.pop();
// // allNames.pop();
// // allNames.pop();
// // console.log(allNames);
// // splice - mutates the original array
// const specificNames = allNames.splice(0,3);
// console.log(specificNames);
// console.log(allNames);

// Arrays and for loop

// const names = ['anna', 'susy', 'bob', 'john', 'susan'];
// const lastName = 'Singh'

// let newArray = [];

// // for loop
// for(let i = 0; i< names.length; i++){
//         console.log(i);
//         console.log(names[i]);

//         newArray.push(`${names[i]} ${lastName}`);

// }

// console.log(names);
// console.log(newArray);

// FUnctions, return if, arrays , for loops

// const gas = [20, 40, 60];
// const food = [10, 40, 50];

// function calculateTotal(arr){
//     let total = 0;
//     for(let i = 0; i < arr.length ; i++){
//        total += arr[i];
//     }
//     return total;
// }

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 432, 1234, 234, 234, 2343]);
// // calculateTotal(food);
// console.log({
//     gas:gasTotal,
//     food:foodTotal,
//     random:randomTotal,
// })


// Null and undefines , both represent "No Value", undefined - 'JS can not find valyue for this'
// variable without values, 
//  null - ' developer sets this value

// let number = 20 + null //20 + 0
// console.log(number);

// let number2 = 20 + undefined //20 + 0
// console.log(number2);

// Truthy and Falsy
// "", '', ``, NaN, false, null, undefined
// const bool1 = true;
// const bool2 = 2>1;

// const text = 'john';

// if(text){
//     console.log('hey the value is truthy.');
// }
// else{
//     console.log('hey the value is falsy');
// }

// unary operator - typeof
// let text = 'some Text';
// console.log(typeof text); //operand

// binary operator - assignment
// let number = 3;
// let number2 = 2 + 5;
// ternary operator 
// consition ? (runs if true) : (runs if false)

// const value = 2>1;

// value ? console.log('Value is true') : console.log('value is false');

// if(value){
//     console.log('Value is True');
// }
// else{
//     console.log('Value is False');
// }

// Global Scope Vs Local Scope
// any variable outside code block {} is said to be in global scope
// can be accesss anywhere in the program
// Gotchas : name collisions, modify by mistakes

// let name = 'bobo';
//     name = 'peter';

// function calculate(){
//     // some other code

//     console.log(name)
//     name = ' orange';
// }

// if(true){
//     // some other code
//     console.log(name)
//     name = 'pants';
// }
// calculate()
// console.log(`my name is ${name} and I'm awesome`)
// const name1 = 'john';

// calllback functions, higher order functions, functions as first class objects
// functions are first class objects - stored in a varialbe (expression), passed as an argument to another function, return from the function (closure)

// Higher order function - accpst another function as an argument or returns another function as a result

// Callback Function - passed to a another function as an argument and executed inside that function

// function greetMorning(name){
//     const myName = 'john';
//     console.log(`Good morning ${name}, my name is ${myName}`)
// }
// function greetAfternoon(name){
//     const myName = 'Nishu';
//     console.log(`Good Afternoon ${name}, my name is ${myName}`)
// }

// greetMorning('bobo');
// greetAfternoon('Nishant');

// Powerful array methods
// for each , map, filter, find, reduce
// Iterate over array - no loop is required
// Accept call back function as an argument, calls callback against each item in a array. Item in Callback parameter.

// const numbers = [0,1,2,3,4];

// for(let i = 0; i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// for each , does not return a new array


// // function showPerson(samosa){
// // console.log(samosa.position.toUpperCase());

// // }

// people.forEach(function (item){
//     console.log(item.position.toUpperCase());
// })

// map, ab aayi map ki baari..

// const people = [
//     {name:'bob', age:20, position:'developer'},
//     {name:'peter', age:25, position:'designer'},
//     {name:'petering', age:25, position:'designer'},
//     {name:'susy', age:30, position:'Boss'},
// ];

// const ages = people.map(function(person){
//     // console.log(person);
//     return person.age + 20;
// });

// const newPeople = people.map(function(person){
//     return {firstName:person.name.toUpperCase(),
//             oldAge:person.age + 20,
//     };
// })

// const Names = people.map(function(person){
//     // console.log(person);
//     return `<h1> ${person.name}</h1>`;
// });

// document.body.innerHTML = Names.join('');

// console.log(Names);

// filter ki baari hain ab, it returns a new array and can manipulate the size of a new array, and returns bases on condition

// const people = [
//     {name:'bob', age:20, position:'developer'},
//     {name:'peter', age:25, position:'designer'},
//     {name:'petering', age:25, position:'designer'},
//     {name:'susy', age:30, position:'Boss'},
// ]

// const youngPeople = people.filter(function(person){
//     return person.age <=25
// })

// console.log(youngPeople);

// math..

// const number = 4.56789

// const date = new Date('1/12/2004');
// console.log(date)

// const day = date.getDay();
// // console.log(days[day])

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());

// const sentence = `${days[day]}, ${date.getDate()} ${months[month]}
// ${date.getFullYear()}`;

// document.body.innerHTML = sentence;

