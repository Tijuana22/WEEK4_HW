// // Creating Classes & Factories
// // Hamster
// // attributes:

// // owner - string, initially set as an empty string
// // name - string, set the name from parameter in constructor method
// // price - integer, set as 15
// // methods:

// // wheelRun() - log "squeak squeak"
// // eatFood() - log "nibble nibble"
// // getPrice() - return the price
// // 🔴 Hard Mode Save & Commit your work!
// // Your commit message should read something like:
// // "created hamster class"
// // Easy Mode Make sure it works so far

// class Hamster {
//     constructor(name){
//       this.owner = ''
//       this.name = name
//       this.price = 15
//     }
//     wheelRun(){
//       console.log('squeak squeak')
//     }
//     eatFood(){
//       console.log('nibble nibble')
//     }
//     getPrice(){
//       return this.price
//     }
//   }

//   let hamster = new Hamster('', '', 15);
// //   console.log(hamster, hamster.wheelRun(), hamster.eatFood(), hamster.getPrice());



// //   Person
// // attributes:

// // name - set name from parameter in constructor method
// // age - initially 0
// // height - initially 0
// // weight - initially 0
// // mood - integer starting at 0 initially
// // hamsters - empty array initially
// // bankAccount - initially set to 0
// // methods:

// // getName() - returns name
// // getAge() - returns age
// // getWeight() - returns weight
// // greet() - logs a message with person's name
// // eat() - increment weight, increment mood
// // exercise() - decrement weight
// // ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// // buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
// // 🔴 Hard Mode Save & Commit your work!
// // Your commit message should read something like:
// // "created person class"
// // // Easy Mode Keep Going and save and run code

// class Person {
//     constructor(name){
//         this.name = name
//         this.age = 0
//         this.height = 0
//         this.weight = 0
//         this.mood = 0
//         this.hamsters = []
//         this.bankAccount = 0
//     }

//     getName(){
//         return this.name
//     }

//     getAge(){
//         return this.age
//     }

//     getWeight(){
//       return this.weight
//     }

//     greet(){
//       console.log(`I am ${this.name} hello`)
//     }

//     eat(){
//       this.weight++
//       this.mood++
//     }

//     exercise(){
//       this.weight--
//     }

//     ageUp(){
//       this.age++
//       this.height++
//       this.weight++
//       this.mood--
//       this.bankAccount+=10
//     }

//     buyHamster(hamster){
//       this.hamsters.push(hamster)
//       this.mood+=10
//       this.bankAccount-=hamster.getPrice()
//     }
    
// }
// let person = new Person('', 0, 0, 0, 0, [], 0);
// // console.log(person, person.greet());




// // Create a Story with your Person class
// // Feel free to update or add methods to automate some of these tasks.

// // Instantiate a new Person named Timmy
// // Age Timmy five years
// // At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
// // Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
// // Age Timmy 9 years
// // Create a hamster named "Gus"
// // Set Gus's owner to the string "Timmy"
// // Have Timmy "buy" Gus
// // Age Timmy 15 years
// // Have Timmy eat twice
// // Have Timmy exercise twice
// // 🔴 Hard Mode Save & Commit your work!
// // Your commit message should read something like:
// // "created timmys story" Easy Mode Keep Going Save and Run Code
/*
 const timmy = new Person("Timmy");
 timmy.ageUp(5);
 timmy.eat(5);
 timmy.exercise(5);

 timmy.ageUp(9);

 const gus = new Hamster("Gus");
 gus.owner = "Timmy";
 timmy.buyHamster(gus);

 timmy.ageUp(15)
 timmy.eat(2);
 timmy.exercise(2); 


 console.log(timmy.eat());
 console.log(timmy.eat());
 console.log(timmy.exercise());
 console.log(timmy.exercise());
*/


// Chef Make Dinners
// class Dinner {

// }

// class Chef {

// }
// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners
// The only thing important here is that student recognizes that the Chef should produce dinners
// No wrong answers as long as the Chef can produce dinners
// Chef should have an array of dinners
// Part 1 is about following instructions, part 2 is purposefully ambiguous, as a dev you need to be able to do both
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "Dinner is served" Easy Mode Keep Going Save and Run Your Code
/*
class Dinner {
    constructor (appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;

    }
    newDinner(){
        return `I would like to have ${this.appetizer}, ${this.entree}, ${this.dessert} `;
    }

}


class Chef extends Dinner {
    constructor (appetizer, entree, dessert){
       this.appetizer = appetizer;
       this.entree = entree;
       this.dessert = dessert; 
    }

    myDinner(){
        return `I would like to have ${this.appetizer}, ${this.entree}, ${this.dessert} `;
    }
   
}
let dinner1 = new Dinner('Nachos', 'Burger', 'Ice Cream');
console.log(dinner1);

let dinner2 = new Dinner('Chicken wings', 'Steak and Potatoes','Lava Cake');
console.log(dinner2);

let dinner3 =new Dinner('BBQ Shrimp', 'Lobster Roll', 'Key Lime Pie');
console.log(dinner3);

console.log(dinner1.newDinner());
console.log(dinner2.newDinner());
console.log(dinner3.newDinner());
*/


// I. Variables & Datatypes
// To answer these questions, you can add them in a multiline comment section inside of script.js

// like this:

// /*
// 1. How do we assign a value to a variable? A. With the assignment operator
// 2. How do we change the value of a...
// ...
// */



// A. Q + A
/*
1. Assigning values to variables is achieved by the = operator (assignment operator); let a = 10
2. By selecting the value and typing the new value and in addition to typing a value, you can also type an expression. 
    let x = 6;
    console.log(x);
    x = 3;
    console.log(x);
3. If the variable was set up with 'const', you will need to change it to 'let' so its value can change later on in the file.
 or reassign a value to the variable in the same manner as it was first made (variableName = newValue;).
4. declare: to create a variable, gives details about the properties of a variable, assign: to symbolically associate a specific piece of information with a name, define: to give a variable value `)
5. Pseudocode is used to create a rough draft or an outline of a program. I should use it to understand a sofware projects requirements and to align code accordingly.
6. 90% of the time, depends on the project and the skill level
*/



// B. Strings Simply should follow the below instructions
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

/*
let firstVariable = "Hello World";
 firstVariable = 13;

 let secondVariable = 13;
 secondVariable = "I hope your day is full of great surprises!"
 console.log(firstVariable);

 const yourName = "Tijuana";
 console.log('Hello, my name is '  + yourName + '!');
*/

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console answer below

/*
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e == 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a + a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
*/

// D. The farm
//   Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

/*
let animal1 = "cow";
if (animal1 > "dog") {
    console.log('mooooo');
}else {
    console.log(`Hey! You,re not a cow`);
}

let animal = "cow";
if (animal = "cow") {
    console.log('mooooo');
}else {
    console.log(`Hey! You,re not a cow`);
}
*/

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic let personAge
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

/*
let personsAge = 22;
if(personsAge >= 16){
console.log("Here are the keys!")
} else {
console.log("Sorry, you're too young.");
}

let personsAge1 = 12;
if(personsAge1 >= 16){
console.log("Here are the keys!")
} else {
console.log("Sorry, you're too young.");
}
*/



// II. Loops simple loops students should follow instructions
// Remember: USE letwhen you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)


// A. The basics
//1. Write a loop that will print out all the numbers from 0 to 10, inclusive
//2. Write a loop that will print out all the numbers from 10 up to and including 400
//3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

/*
for(let x = 0; x < 11; x++){
        console.log(x);
}

for(let a = 10; a < 401; a++){
        console.log(a);
 }

 for(let b = 12; b < 4002; b +=3){
        console.log(b);
 }
*/


// B. Get even students should use modulus
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

/*
for(let a = 2; a < 100; a++)
if(a % 2 == 0 ){
    console.log(a + "<= is an even number");
}else {
    console.log(a)
}
*/ 



// C. Give me Five students should use modulus
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:

// I found a 5. High five!
// I found a 10. High five!


// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!


// For numbers divisible by both three and five, be sure your code prints both messages
/*
for(let a = 1; a < 101; a++){
    if (0 === a % 5 && a % 3 === 0){
        console.log( 'I found a ' + a + '. High Five!'); 
        console.log('I found a number ' + a + '. Three is a crowd')
    }else if (a % 5 === 0){
        console.log('I found a ' + a + '. High Five!');
    }else if (a % 3 === 0){
        console.log('I found a number ' + a + '. Three is a crowd');
    }
}
*/

// D. Savings account simple students should follow instructions and either make an array of numbers or just make a loop
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

/*
let bank_account = 0;
for (let i = 1; i <= 10; i++ ) {
  bank_account += i;
}
console.log("bank_account = ", bank_account);

 bank_account = 0;
for (let i = 1; i <= 100; i++ ) {
    bank_account += i * 2;
}
console.log('bank_account =',bank_account);
*/


// III. Arrays & Control flow answer questions



// A. Talk about it:
//1.What are the things in an array called? elements// Do Arrays guarantee those things will be in order? yes
//2. What real-life thing could you model with an array? no wrong answers as long as its a list/collection

/*
1. Elements, no 
2. A list of items in your pantry or a collection of cards
*/

// B. Easy Does It simple they should follow instructions
// Create an array that contains three quotes and store it in a variable called quotes

/*
const quotes = [
    'Whatever you are, be a good one', 
    'Be yourself, everyone else is taken', 
    'The only real mistake is the one from which we learn nothing'];
    console.log(quotes);
*/

// C. Accessing elements simple they should follow instructions
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

/*
const randomThings = [1, 10, "Hello", true]
randomThings[0];      
randomThings[2] = 'World';
console.log(randomThings[2]);
*/

// D. Change values simple they should follow instructions
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

/*
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[2]
ourClass[4] = 'Octocat';
ourClass.push('Cloud City');
console.log(ourClass[2]);
console.log(ourClass[4]);
console.log(ourClass);
*/


// E. Mix It Up simple they should follow instructions
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

/*
const myArray = [5, 10, 500, 20];
myArray.push("Aegon ");
myArray.push('everything');
myArray.shift("5");
myArray.unshift('Bob Marley');
myArray.pop();
myArray.reverse();

console.log(myArray);
*/


// F. Biggie Smalls simple they should follow instructions
// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.

/*
let num = 130;
if (num < 100){
    console.log('little number');
}else {
    console.log('big number');
}
let num1 = 13;
if (num1 < 100){
    console.log('little number');
}else {
    console.log('big number');
}
*/


// G. Monkey in the Middle simple they should follow instructions
// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

/*
let monkeyNum = 30;
if (monkeyNum < 5){
    console.log("little number");
}else if (monkeyNum > 10){
    console.log('big number');
}else {
    console.log('monkey');
}

monkeyNum = 1;
monkeyNum = 30;
*/


// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
 
/*
console.log("Kristyn is rocking that " + kristynsCloset[3] + " today!");
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

thomsCloset[0][0];
thomsCloset[1][0];
thomsCloset[2][1];
console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ' , ' + thomsCloset[1][0] + ' and ' + thomsCloset[2][1]  + ' tonight!');
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);
*/


// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

/*
const printGreeting = (name) => {
    return 'Hello there, ' + name + '!';
}
console.log(printGreeting('Slimer'));
*/

// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

/*
let printCool = (name) => {
    return name + ' is cool!'
} 
 console.log(printCool("Captain Reynolds"))
*/

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

/*
const calculateCube = (num) => {
    return num * num * num
}
console.log(calculateCube(5));
*/

// D. isVowel
//  Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want

/*
function isVowel (char){
const arr = [a, e, i, o, u]
    return arr.includes(char.toLowerCase())
}
console.log(isVowel('a'));
*/

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

/*
 const getTwoLengths = (str1, str2) => {
        const lengthArray = [str1.length, str2.length];
        return lengthArray;    
}
console.log(getTwoLengths('Hank', 'Hippopopalous'));
*/

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string

/*
const getMultipleLengths = (strArr) => {
    const multipleLengthArray = [];
    for (a = 0; a < strArr.length; a ++){
        multipleLengthArray.push(strArr[a].length);
    }
    return multipleLengthArray;
}
console.log(getMultipleLengths(['hello', 'what', 'is', 'up', 'dude' ]));
*/

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

/*
const maxOfThree =(num1, num2, num3) => {
    const threeNumArray = [num1, num2, num3];
    threeNumArray.sort(function(a, b){return a - b});
    return threeNumArray[2];
}
console.log(maxOfThree(3, 10, 1));
*/




//H. printLongestWord
//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array
/*
 const printLongestWord = (arr) => {
    let ans = arr[0];
    let length = arr[0].length
    arr.forEach((str) => {
        prevLength =length
        length = Math.max(ans.length, str.length)
        if(prevLength !==length){
        ans = str
        }
    })
    return ans   
} 
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
 */

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
// const user = {name:"Jane Doe", age: 46, email: "Janedoe@gmail.com", purchased:[]};

// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

/*
const user = {name:"Jane Doe", age: 46, email: "Janedoe@gmail.com", purchased:[]};
user.email ="Janedoe46@gmail.com"
user.age = 46;
for (let i = 1; i <= 47; i++ ) {
    user.age = i; 
}
console.log(user);
*/

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key location to the object, and give it a value or some-or-other location (a string).

/*
const user = {name:"Jane Doe", age: 46, email: "Janedoe@gmail.com", purchased:[]};
user['location'] = "North Carolina";
console.log(user);
*/


// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

const user = {name:"Jane Doe", age: 46, email: "Janedoe@gmail.com", purchased:[]};
user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhpurs');
console.log(user)
console.log(user.purchased[2])