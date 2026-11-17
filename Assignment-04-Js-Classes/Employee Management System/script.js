// Creating Employee class
class Employee {

    // Constructor
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Method to calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Method to apply bonus
    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
}

// Creating 5 employee objects
let emp1 = new Employee(101, "Rahul", "IT", 30000);
let emp2 = new Employee(102, "Amit", "HR", 25000);
let emp3 = new Employee(103, "Priya", "Finance", 40000);
let emp4 = new Employee(104, "Neha", "Marketing", 35000);
let emp5 = new Employee(105, "Rohit", "IT", 45000);

// Storing employees in an array
let employees = [emp1, emp2, emp3, emp4, emp5];

// Applying 10% bonus to all employees
employees.forEach(employee => {
    employee.applyBonus(10);
});

// Calculating annual salary of each employee
console.log("Employee Annual Salary Details:");

employees.forEach(employee => {
    console.log(
        "ID: " + employee.id +
        ", Name: " + employee.name +
        ", Department: " + employee.department +
        ", Annual Salary: Rs." + employee.getAnnualSalary()
    );
});

// Calculating total annual payout using reduce()
let totalPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

// Displaying total company payout
console.log("\nTotal Annual Company Payout: Rs." + totalPayout);
