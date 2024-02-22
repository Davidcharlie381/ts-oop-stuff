"use strict";
class Animal {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    makeSound() {
        console.log("Woof woof");
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    makeSound() {
        console.log('Meow');
    }
}
const bush = new Dog("Bush");
const cyndy = new Cat("Cyndy");
