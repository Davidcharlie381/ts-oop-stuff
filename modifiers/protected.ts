class Vehicle {
    protected speed: number;
    constructor(speed: number) {
        this.speed = speed
    }
}

class Car extends Vehicle {
    constructor(speed: number) {
        super(speed);
    }

    accelerate() {
        this.speed += 10
    }
}

const myCar = new  Car(60);

/** Errors as speed is protected and only accessible in Vehicle and its subclasses */
// console.log(myCar.speed)