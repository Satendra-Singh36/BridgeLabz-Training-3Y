"use strict";
let limit = 5;

for (let i = 1; i <= limit; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern.trim());
}