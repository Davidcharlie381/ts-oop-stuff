"use strict";
class Engine {
    start() {
        console.log("Engine started...");
    }
}
class Bike {
    constructor(engine) {
        this.engine = engine;
    }
    start() {
        this.engine.start();
        setTimeout(() => {
            console.log("Bike started...");
        }, 3000);
    }
}
const myBike = new Bike(new Engine());
myBike.start();
