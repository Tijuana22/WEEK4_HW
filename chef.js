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