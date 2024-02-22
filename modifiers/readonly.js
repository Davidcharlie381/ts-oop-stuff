"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
const circle = new Circle(5);
console.log(circle.radius);
/**
 * Throws an error because radius is read-only
 */
// circle.radius = 4
