class Person {

    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Student Name: " + this.name);
    }
}

class Student extends Person {

    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Student Branch: " + this.branch);
    }
}

let student1 = new Student("Satendra", "Computer Science");

function showDetails() {

    student1.showName();
    student1.showBranch();

    console.log(
        "Person prototype inherited:",
        Person.prototype.isPrototypeOf(student1)
    );

    console.log(
        "Student prototype:",
        Student.prototype.isPrototypeOf(student1)
    );
}
