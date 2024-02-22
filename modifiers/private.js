"use strict";
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getStudentName() {
        return this.name;
    }
    getStudentAge() {
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
