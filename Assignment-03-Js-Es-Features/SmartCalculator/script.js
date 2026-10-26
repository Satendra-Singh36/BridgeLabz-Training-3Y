"use strict";
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;
const operation = "divide";
try {
    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "divide":
            if (num2 === 0) throw new Error("Cannot divide by zero");
            result = num1 / num2;
            break;
        case "power":
            result = num1 ** num2;
            break;
        case "root":
            if (num1 < 0) throw new Error("Cannot find square root of a negative number");
            result = Math.sqrt(num1);
            break;
        case "subtract":
            result = num1 - num2;
            break;
        default:
            const error = new Error("Operation not recognized");
            error.name = "InvalidOperationError";
            throw error;
    }
    console.log(`Operation: ${operation}\nNumbers: ${num1}, ${num2}\nResult: ${result}`);
} catch (error) {
    console.log(`Operation: ${operation}\nNumbers: ${num1}, ${num2}\n${error.name}: ${error.message}`);
}