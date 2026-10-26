let bonus = 5000;
function calculateSalary(isPermanent) {
    let salary = 40000;

    if (isPermanent === true) {
        let totalSalary = salary + bonus;
        console.log("Permanent Employee");
        console.log("Base Salary:", salary);
        console.log("Bonus:", bonus);
        console.log("Total Salary:", totalSalary);
    } else {
        let totalSalary = salary;
        console.log("Temporary Employee");
        console.log("Base Salary:", salary);
        console.log("Bonus: 0");
        console.log("Total Salary:", totalSalary);
    }
}

calculateSalary(true);
calculateSalary(false);

console.log("Global Bonus:", bonus);
