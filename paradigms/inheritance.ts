class Animal {
    constructor(public name: string) {
        this.name = name
    }
    makeSound(): void {
        console.log("Some generic animal sound")
    }
}

class Dog extends Animal {
    constructor(public name: string) {
        super(name);
    }

    makeSound(): void {
        console.log("Woof woof")
    }
}

class Cat extends Animal {
    constructor(public name: string) {
        super(name)
    }

    makeSound(): void {
        console.log('Meow')
    }
}

const bush = new Dog("Bush");
const cyndy = new Cat("Cyndy")