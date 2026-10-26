"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];
for (let value of apiData) {
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);
    console.log({ original: value, number: num, boolean: bool, string: str });
    if (typeof value === "string" && (value.trim() === "" || isNaN(num)) || typeof num !== "number" || isNaN(num)) {
        invalidNumbers.push(value);
    } else {
        validNumbers.push(num);
    }
}
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);