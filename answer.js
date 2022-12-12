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


for(let y = 0; y < 101; y++)
if(y % 3 == 0 && y % 5 == 0){
    console.log('FizzBuzz');
}else if ( y % 3 === 0){
    console.log('Fizz');
}else (y % 5 === 0)
    console.log('Buzz');
