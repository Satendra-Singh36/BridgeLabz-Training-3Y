"use strict";

const form = document.getElementById("studentForm");

const patterns = {
    name: /^[A-Za-z]+$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/
};

const messages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email address.",
    phone: "Phone must contain exactly 10 digits.",
    password: "Password must contain an uppercase letter, a number, and a special character."
};

function validateField(field) {
    const input = document.getElementById(field);
    const error = document.getElementById(field + "Error");
    const value = input.value.trim();
    const isValid = patterns[field].test(value);

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    error.textContent = isValid ? "" : messages[field];

    return isValid;
}

Object.keys(patterns).forEach(field => {
    document.getElementById(field).addEventListener("input", () => {
        validateField(field);
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const isValid = Object.keys(patterns)
        .map(validateField)
        .every(Boolean);

    const result = document.getElementById("result");

    if (isValid) {
        result.textContent = "Registration successful!";
        result.style.color = "green";
        console.log("Registration successful!");
    } else {
        result.textContent = "Please correct the errors.";
        result.style.color = "red";
        console.log("Registration failed!");
    }
});
