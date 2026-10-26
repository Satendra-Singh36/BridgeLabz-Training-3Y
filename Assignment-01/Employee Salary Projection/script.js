let salary = 30000;
let incrementRate = 10;
let salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;
    salary = Math.round(salary);
    salaryProjection.push({ Year: year, Salary: `₹${salary}` });
}

console.table(salaryProjection);