// I. Variables & Datatypes
// A. Q = A
// // How do we assign a value to a variable?

// let a = 10;
// let b = a;
// console.log(b);

// // How do we change the value of a variable?

// let x = 6;
// console.log(x);
// x = 3;
// console.log(x);
// // How do we assign an existing variable to a new variable?

// // Remind me, what are declare, assign, and define?
// console.log(`declare: to create a variable, gives details about the properties of a variable, assign: to symbolically associate a specific piece of information with a name, define: to give a variable value `)

// // What is pseudocoding and why should you do it?
// console.log(`Pseudocode is used to create a rough draft or an outline of a program. I should use it to understand a sofware projects requirements and to align code accordingly.`)

// // What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// console.log(`90% of the time, depends on the project and th skill level`);


// B.
// // Create a variable called firstVariable
// // Assign it the value of the string "Hello World"
// // Change the value of this variable to some number
// // Store the value of firstVariablein a new variable called secondVariable
// // Change the value of secondVariableto any string.
// // What is the value of firstVariable? 13
// // Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// // ex: Hello, my name is Jean Valjean

// let firstVariable = "Hello World";
// firstVariable = 13;

// let secondVariable = 13;
// secondVariable = "I hope your day is full of great surprises!"
// console.log(firstVariable);

// const yourName = "Tijuana";
// console.log('Hello, my name is '  + yourName + '!');


// C.
// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false && false && false && false || true);
//   console.log(false === false)
//   console.log(e == 'Kevin');
//   console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a + a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 == '48');


// D. The farm
//   Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// let animal = "cow";
// if (animal > "cow") {
//     console.log('mooooo');
// }else {
//     console.log(`Hey! You,re not a cow`);
// }

// let animal = "cow";
// if (animal = "cow") {
//     console.log('mooooo');
// }else {
//     console.log(`Hey! You,re not a cow`);
// }

// E. Driver's Ed

// let personsAge = 21;
// if (personsAge < 16){
//     console.log('Here are the keys!');
// }else {
//     console.log(`Sorry, you're too young.`);
// }


// II. LOOPS
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// for(let x = 0; x < 11; x++){
//     console.log(x);
// }

// // Write a loop that will print out all the numbers from 10 up to and including 400
// for(let a = 10; a < 401; a++){
//     console.log(a);
// }
// // Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for(let b = 12; b < 4003; b +=3){
//     console.log(b);
// }

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"


// for(let a = 2; a < 100; a++){
//     console.log(even + '<--is an even number'); 
// }

    
  


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// For numbers divisible by both three and five, be sure your code prints both messages

// for(let a = 1; a < 101; a++){
//     if (0 === a % 5 && a % 3 === 0){
//         console.log( 'I found a ' + a + '. High Five!'); 
//         console.log('I found a number ' + a + '. Three is a crowd')
//     }else if (a % 5 === 0){
//         console.log('I found a ' + a + '. High Five!');
//     }else if (a % 3 === 0){
//         console.log('I found a number ' + a + '. Three is a crowd');
//     }
// }

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

// let bank_account = 0;
// for (let i = 1; i <= 10; i++ ) {
//   bank_account += i;
// }
// console.log("bank_account = ", bank_account);

//  bank_account = 0;
// for (let i = 1; i <= 100; i++ ) {
//     bank_account += i * 2;
// }
// console.log('bank_account =',bank_account);

// III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called?
// console.log('Elements');
// Do Arrays guarantee those things will be in order?
// console.log('No');
// What real-life thing could you model with an array?
// console.log('An array of chocolates ')


// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

// const quotes = ['Whatever you are, be a good one', 'Be yourself, everyone else is taken', 'The only real mistake is the one from which we learn nothing'];

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// const randomThings = [1, 10, "Hello", true]
// randomThings[0];      
// randomThings[2] = 'World';
// console.log(randomThings[2]);


// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// ourClass[2]
// ourClass[4] = 'Octocat';
// ourClass.push('Cloud City');
// console.log(ourClass[2]);
// console.log(ourClass[4]);
// console.log(ourClass);


// //E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?






