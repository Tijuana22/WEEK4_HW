// Part I: HTML & CSS
// Prepare yourself for tomorrow's morning exercise! Watch the following videos on HTML and CSS. You will be working on practicing CSS in your Morning Exercise.

// Rank you comfort with the following material on a scale of 0 - 5: 4


// Part II: JavaScript Reps
// Easy Going
// Write a for loop that will log the numbers 1 through 20.
// 🔴 The commit message should read:
// "Easy Going answered"

// for(let x = 0; x < 21; x++){
//     console.log(x);
// }


// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.

// Hint: Think about the increment expression.

// 🔴 The commit message should read:
// "Get Even answered"

// for(let a = 0; a < 201; a +=2){
//     console.log(a);
// }


// // Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// 🔴 The commit message should read:
// "Fizz Buzz answered"

// for(let y = 0; y < 101; y++)
// if(y % 3 == 0 && y % 5 == 0){
//     console.log('FizzBuzz');
// }else if ( y % 3 === 0){
//     console.log('Fizz');
// }else (y % 5 === 0)
//     console.log('Buzz');



// Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// Give D'Art a second hometown by adding "Hawkins"
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// 🔴 The commit message should read:
// "Wild Wild Life answered"

plantee.age = 5000;
for(let a = 1; a <= 5001; a++){
    plantee.age = a;
}
console.log(plantee);

wolfy[3] = 'Gotham City';
console.log(wolfy);

dart.push('Hawkins');
console.log(dart);

wolfy.shift('Wolfy');
wolfy.unshift('Gameboy');
console.log(wolfy);