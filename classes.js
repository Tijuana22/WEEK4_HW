// Creating Classes & Factories
// Hamster
// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created hamster class"
// Easy Mode Make sure it works so far

class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
  }

  let hamster = new Hamster('', '', 15);
//   console.log(hamster, hamster.wheelRun(), hamster.eatFood(), hamster.getPrice());



//   Person
// attributes:

// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:

// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created person class"
// // Easy Mode Keep Going and save and run code

class Person {
    constructor(name){
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getWeight(){
      return this.weight
    }

    greet(){
      console.log(`I am ${this.name} hello`)
    }

    eat(){
      this.weight++
      this.mood++
    }

    exercise(){
      this.weight--
    }

    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }

    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    }
    
}
let person = new Person('', 0, 0, 0, 0, [], 0);
// console.log(person, person.greet());




// Create a Story with your Person class
// Feel free to update or add methods to automate some of these tasks.

// Instantiate a new Person named Timmy
// Age Timmy five years
// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
// Age Timmy 9 years
// Create a hamster named "Gus"
// Set Gus's owner to the string "Timmy"
// Have Timmy "buy" Gus
// Age Timmy 15 years
// Have Timmy eat twice
// Have Timmy exercise twice
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created timmys story" Easy Mode Keep Going Save and Run Code

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
