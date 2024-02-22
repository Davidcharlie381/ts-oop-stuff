"use strict";
class Shape2 {
    area() {
        return 0;
    }
}
class Square2 extends Shape2 {
    constructor(length) {
        super();
        this.length = length;
        this.length = length;
    }
    area() {
        return this.length * this.length;
    }
}
class Rectangle extends Shape2 {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}
const shapes = [new Square2(3), new Rectangle(3, 2)];
shapes.forEach((shape) => {
    console.log(shape.area());
});
