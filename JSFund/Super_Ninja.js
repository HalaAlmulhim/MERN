class Ninja{
    constructor (name, health, speed, strength){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strenghth = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(`Ninja's name: ${this.name}, health : ${this.health} , speed : ${this.speed} , strenghth : ${this.strenghth} `);
    }

    drinkSake() {
        this.health +=10;
        // or we can say also
        // this.health = this.health + 10 ;

    }
}

class Sensei extends Ninja {
    constructor (name){
    super (name);
    this.health += 200
    this.speed = 10;
    this.strenghth = 10;
    this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"