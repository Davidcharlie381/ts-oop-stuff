interface Shape3 {
  area(): number;
}

class Sphere2 implements Shape3 {
  constructor(public radius: number) {
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const mySphere = new Sphere2(12);
console.log(mySphere.area())