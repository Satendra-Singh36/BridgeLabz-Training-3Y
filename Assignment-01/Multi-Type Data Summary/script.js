let userName = "Satendra";
let age = 20;
let isStudent = true;
let skills = ["Java", "JavaScript"];
let user = { city: "Budaun" };
let data = null;
let address;

console.table([
    { label: "userName", value: userName, type: typeof userName },
    { label: "age", value: age, type: typeof age },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "skills", value: skills, type: Array.isArray(skills) ? "array" : typeof skills },
    { label: "user", value: JSON.stringify(user), type: typeof user },
    { label: "data", value: data, type: "null" },
    { label: "address", value: address, type: typeof address }
]);