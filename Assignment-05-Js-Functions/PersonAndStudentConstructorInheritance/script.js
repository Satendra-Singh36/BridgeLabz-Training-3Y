// Q5: Constructor Inheritance and Prototype Chain

// Parent Constructor Function
function Person(name) {

    this.name = name;
}

// Adding method to Person prototype
Person.prototype.showName = function () {

    console.log("Student Name: " + this.name);
};


// Child Constructor Function
function Student(name, branch) {

    // Calling parent constructor
    Person.call(this, name);

    this.branch = branch;
}

// Inheriting Person prototype
Student.prototype = Object.create(Person.prototype);

// Restoring Student constructor reference
Student.prototype.constructor = Student;


// Adding method to Student prototype
Student.prototype.showBranch = function () {

    console.log("Student Branch: " + this.branch);
};


// Creating Student object
let student1 = new Student("Satendra", "Computer Science");


// Function to display student details
function showStudentDetails() {

    // Calling Person prototype method
    student1.showName();

    // Calling Student prototype method
    student1.showBranch();

    // Checking prototype chain
    console.log(
        "Person prototype inherited:",
        Person.prototype.isPrototypeOf(student1)
    );

    console.log(
        "Student prototype:",
        Student.prototype.isPrototypeOf(student1)
    );
}
