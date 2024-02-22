abstract class Shape {
    abstract calculateArea(): number
}

/** Errors as abstract classes can't be instantiated, but can only be extended as they serve as blueprints */

// const shape = new Shape()

class Square extends Shape {
    readonly length: number
    constructor(length: number) {
        super();
        this.length = length
    }
    calculateArea(): number {
        return this.length * 2
    }
}

const mySquare = new Square(4)