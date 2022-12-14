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

// const timmy = new Person("Timmy");
// timmy.ageUp(5);
// timmy.eat(5);
// timmy.exercise(5);

// timmy.ageUp(9);

// const gus = new Hamster("Gus");
// gus.owner = "Timmy";
// timmy.buyHamster(gus);

// timmy.ageUp(15)
// timmy.eat(2);
// timmy.exercise(2); 


// console.log(timmy.eat());
// console.log(timmy.eat());
// console.log(timmy.exercise());
// console.log(timmy.exercise());



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



// I. Variables & Datatypes
// To answer these questions, you can add them in a multiline comment section inside of script.js

// like this:

// /*
// 1. How do we assign a value to a variable? A. With the assignment operator
// 2. How do we change the value of a...
// ...
// */



// A. Q + A
// student should be able to describe these answers in their own words
// How do we assign a value to a variable? let somevar = 10
// How do we change the value of a variable? somevar = 12
// How do we assign an existing variable to a new variable? let newvar = somevar
// Remind me, what are declare, assign, and define? no wrong answers, they should show an understanding of how to use these words
// What is pseudocoding and why should you do it? no wrong answers but they should understand that psuedo code is not code its plain english description of what they want to accomplish
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? no wrong answers but they should defend what they say



// B. Strings Simply should follow the below instructions
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new var


