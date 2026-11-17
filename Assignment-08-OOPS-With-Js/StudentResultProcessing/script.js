// Student Class
class Student {

    // Constructor
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate Average using reduce()
    calculateAverage() {

        const totalMarks = this.marks.reduce(function(sum, mark) {
            return sum + mark;
        }, 0);

        return totalMarks / this.marks.length;
    }

    // Calculate Grade based on Average
    calculateGrade() {

        const average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        }
        else if (average >= 60) {
            return "B";
        }
        else if (average >= 40) {
            return "C";
        }
        else {
            return "F";
        }
    }
}


// Create 3 Student Objects
const student1 = new Student("Rahul", [85, 90, 80, 95, 90]);

const student2 = new Student("Aman", [65, 70, 60, 75, 70]);

const student3 = new Student("Priya", [30, 35, 40, 25, 30]);


// Store Students in Array
const students = [student1, student2, student3];


// Display Student Results
students.forEach(function(student) {

    console.log("Student Name:", student.name);

    console.log("Marks:", student.marks);

    console.log("Average:", student.calculateAverage());

    console.log("Grade:", student.calculateGrade());

    console.log("------------------------");

});
