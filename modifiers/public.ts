class Pupil {
    public name: string;
    constructor(name: string) {
        this.name = name
    }
    getPupil(): string {
        return this.name
    }
}

const pupil1 = new Pupil("John");

console.log(pupil1.getPupil());