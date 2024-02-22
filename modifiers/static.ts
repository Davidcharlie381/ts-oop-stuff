class Maths {
    static readonly PI: number = 3.14
    
    static calculateArea(radius: number = 1): number {
        return this.PI * (radius ** 2)
    }
}

const circleArea = Maths.calculateArea(2);
console.log(circleArea);

/** Throws an error because PI and calculateArea are static members */
const sphere = new Maths();

// console.log(sphere.PI)