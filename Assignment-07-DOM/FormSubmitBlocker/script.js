// Select Form
const registrationForm = document.getElementById("registrationForm");

// Select Input Fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Select Error Messages
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Select Success Message
const successMessage = document.getElementById("successMessage");


// Name Validation
function validateName() {

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    }

    nameError.textContent = "";
    return true;
}


// Email Validation
function validateEmail() {

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        return false;
    }

    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must contain @";
        return false;
    }

    emailError.textContent = "";
    return true;
}


// Password Validation
function validatePassword() {

    if (passwordInput.value.length < 6) {
        passwordError.textContent =
            "Password must be at least 6 characters";

        return false;
    }

    passwordError.textContent = "";
    return true;
}


// Live Validation - Name
nameInput.addEventListener("input", function() {

    validateName();
    successMessage.textContent = "";

});


// Live Validation - Email
emailInput.addEventListener("input", function() {

    validateEmail();
    successMessage.textContent = "";

});


// Live Validation - Password
passwordInput.addEventListener("input", function() {

    validatePassword();
    successMessage.textContent = "";

});


// Form Submit Event
registrationForm.addEventListener("submit", function(event) {

    // Prevent Default Form Submission
    event.preventDefault();

    // Validate All Fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Check All Validations
    if (isNameValid && isEmailValid && isPasswordValid) {

        successMessage.textContent =
            "Form Submitted Successfully!";

        // Reset Form
        registrationForm.reset();

    } else {

        successMessage.textContent = "";

    }

});
