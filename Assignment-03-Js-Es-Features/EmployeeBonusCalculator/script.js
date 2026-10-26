"use strict";
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];
try {
    for (const employee of employees) {
        if (!employee.name || employee.salary === undefined || employee.years === undefined) throw new Error("Missing employee property");
        let salary = Number(employee.salary);
        let years = Number(employee.years);
        if (isNaN(salary) || isNaN(years)) throw new Error("Invalid employee data");
        let bonus = years > 3 ? salary * 0.1 : salary * 0.05;
        console.log(`${employee.name}: Salary = ₹${salary}, Experience = ${years} years, Bonus = ₹${bonus.toFixed(2)}`);
    }
} catch (error) {
    console.log(`Error: ${error.message}`);
}