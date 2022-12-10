class Hamster {
    constructor (owner = '', name, price = 15) {

    this.owner = owner;
    this.name = name;
    this.price = price;
    }

wheelRun() {
    console.log('squeak squeak');
}

eatFood(){
    console.log('nibble nibble');
}

getPrice(){
  return this.price
}

}

let hamster = new Hamster('', '', 15);
console.log(hamster, hamster.wheelRun(), hamster.eatFood(), hamster.getPrice());




class Person {
    constructor (name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0,){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;

    }

getName(){
    return this.name;
} 

getAge(){
    return this.age;
}

getWeight(){
    return this.weight;
}

greet(){
    console.log(`Hello, my is ${this.name}`)
}

eat(num){
    this.weight = ++num;
    this.mood = ++num;

}

exercise(num){
    this.weight = --num;

}
    
ageUp(num){
    this.age +=num;
    this.height +=num;
    this.weight +=num;
    this.mood -=num;
    this.bankAccount+= 10;

}

buyHamster(hamster) {
this.hamsters.push(hamster);
    this.mood+=10
    this.bankAccount-= hamster.getPrice();
    if (this.bankAccount >= hamster.getPrice()) {
        this.bankAccount -= hamster.getPrice();
        return `You have enough money.`
    } else 
    return`You don't have enough money.`;
  }
  getPrice() {
    
  }


}  

 


const timmy = new Person("Timmy"); 
const gus = new Hamster("Gus");

timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5);

timmy.ageUp(9);
gus.owner = 'Timmy';
timmy.buyHamster(gus);

timmy.ageUp(15);
timmy.eat(2);
timmy.exercise(2);

console.log(gus.owner);
// // console.log(timmy.buyHamster(gus));
// console.log(timmy.ageUp(15));
console.log(timmy.bankAccount);


