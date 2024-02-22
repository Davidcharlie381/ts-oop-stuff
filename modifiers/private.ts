class Student {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getStudentName(): string {
    return this.name;
  }

  getStudentAge(): number {
    return this.age;
  }
}

const student1 = new Student("jane", 17);
console.log(student1.getStudentAge());
console.log(student1.getStudentName());

/**
 * Throws an error. Age is private
 */

// console.log(student1.age)
