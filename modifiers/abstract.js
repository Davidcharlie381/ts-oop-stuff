"use strict";
class Shape {
}
/** Errors as abstract classes can't be instantiated, but can only be extended as they serve as blueprints */
// const shape = new Shape()
class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }
    calculateArea() {
        return this.length * 2;
    }
}
const mySquare = new Square(4);
