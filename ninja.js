class Ninja {
    constructor(name, health = 10, speed, strength) {
        // Attributes
        this.name = name;
        this.health = health;
        this.speed = '3';
        this.strength = '3';
    }
    // Methods
    sayName() {
        console.log(`Your ninjas name is: ${this.name}.`)
        return this;
    };

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strangth: ${this.strength}!`);
        return this;
    }

    drinkSake() {
        //convert health to a number and then add 10
        this.health += 10;
        console.log(`Drank sake. Health is now: ${this.health}`);
        return this;
    }
}




class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        // this class Sensei has these default attributes 
        super(name, health, speed, strength, wisdom);
    }
    speakWisdom() {
        super.drinkSake();
        console.log(`Success is not final, failure is not fatal: It is the courage to continue that counts. `)
        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}!`)
        return this;
    }
}


// create new instance of ninja class
const ninja1 = new Ninja("Mr. Bigglesworth");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

// Create new instance of sensei class with specific attributes
const superSensei = new Sensei("Coding Dojo", 200, 10, 10, 'wisdom');
superSensei.speakWisdom();
superSensei.showStats();
