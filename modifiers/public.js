"use strict";
class Pupil {
    constructor(name) {
        this.name = name;
    }
    getPupil() {
        return this.name;
    }
}
const pupil1 = new Pupil("John");
console.log(pupil1.getPupil());
