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
    this.age = ++num;
    this.height = ++num;
    this.weight = ++num;
    this.mood = --num;
    this.bankAccount+= 10;


}

buyHamster(hamster) {
this.hamster.push(hamster);
    this.mood+=10
    this.bankAccount = -- hamster.getPrice();
}

}  

getPrice() {
    
}