// Parent Class
class Employee {

    // Constructor
    constructor(name, department) {

        this.name = name;
        this.department = department;

    }

    // Work Method
    work() {

        console.log(this.name + " is performing general employee work.");

    }

}

// Child Class
class Manager extends Employee {

    // Constructor
    constructor(name, department) {

        super(name, department);

    }

    // Method Overriding
    work() {

        console.log(this.name + " is managing the " + this.department + " department.");

    }

}


// Create Employee Objects
const employee1 = new Employee("Rahul", "IT");

const employee2 = new Employee("Aman", "HR");


// Create Manager Object
const manager1 = new Manager("Priya", "Sales");


// Display Employee Details
console.log("Employee Details:");

console.log("Name:", employee1.name);
console.log("Department:", employee1.department);
employee1.work();

console.log("--------------------------");

console.log("Employee Details:");

console.log("Name:", employee2.name);
console.log("Department:", employee2.department);
employee2.work();

console.log("--------------------------");

console.log("Manager Details:");

console.log("Name:", manager1.name);
console.log("Department:", manager1.department);
manager1.work();

console.log("--------------------------");


// Runtime Polymorphism
const employees = [employee1, employee2, manager1];

console.log("Runtime Polymorphism:");

employees.forEach(function(employee) {

    employee.work();

});
