class Shape2 {
  area(): number {
    return 0;
  }
}

class Square2 extends Shape2 {
  constructor(private length: number) {
    super();
    this.length = length;
  }

  area(): number {
    return this.length * this.length;
  }
}

class Rectangle extends Shape2 {
  constructor(private length: number, private width: number) {
    super();
    this.length = length;
    this.width = width;
  }
  area(): number {
    return this.length * this.width;
  }
}

const shapes: Shape2[] = [new Square2(3), new Rectangle(3, 2)];

shapes.forEach((shape: Shape2) => {
  console.log(shape.area());
});
