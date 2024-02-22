"use strict";
class Maths {
    static calculateArea(radius = 1) {
        return this.PI * (radius ** 2);
    }
}
Maths.PI = 3.14;
const circleArea = Maths.calculateArea(2);
console.log(circleArea);
/** Throws an error because PI and calculateArea are static members */
const sphere = new Maths();
// console.log(sphere.PI)
