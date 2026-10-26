"use strict";const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];
const clean = [];
const under18 = [];
for (let i = 0; i < rawData.length; i++) {
    try {
        let data = JSON.parse(rawData[i]);
        if (!data.user || data.age === undefined) throw new Error("Missing user or age");
        data.age = Number(data.age);
        if (isNaN(data.age)) throw new Error("Invalid age");
        clean.push(data);
        if (data.age < 18) under18.push(data);
    } catch (error) {
        console.log(`Line ${i + 1}: ${error.message}`);
    }
}
console.log("Clean Data:", clean);
console.log("Under-18 Users:", under18);
console.log(`Valid Entries: ${clean.length}`);
console.log(`Invalid Entries: ${rawData.length - clean.length}`);