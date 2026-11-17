// Select HTML elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

const summary = document.getElementById("summary");

// Select all steps
const steps = [
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3")
];

// Current step
let currentStep = 0;


// Function to display current step
function showStep() {

    // Hide all steps
    steps.forEach(function(step) {
        step.hidden = true;
    });

    // Show current step
    steps[currentStep].hidden = false;

    // Hide summary
    summary.hidden = true;

    // Back button visibility
    backButton.hidden = currentStep === 0;

    // Change Next button text
    nextButton.textContent =
        currentStep === 2 ? "Submit" : "Next";
}


// Function to validate input
function validateStep() {

    // Step 1: Name Validation
    if (currentStep === 0) {

        const name = nameInput.value.trim();

        if (name === "") {
            document.getElementById("nameError").textContent =
                "Please enter your name";

            return false;
        }

        document.getElementById("nameError").textContent = "";
    }

    // Step 2: Email Validation
    else if (currentStep === 1) {

        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            document.getElementById("emailError").textContent =
                "Please enter a valid email";

            return false;
        }

        document.getElementById("emailError").textContent = "";
    }

    // Step 3: Password Validation
    else if (currentStep === 2) {

        const password = passwordInput.value;

        if (password.length < 8) {

            document.getElementById("passwordError").textContent =
                "Password must contain at least 8 characters";

            return false;
        }

        document.getElementById("passwordError").textContent = "";
    }

    return true;
}


// Next / Submit Button
nextButton.addEventListener("click", function() {

    // Check validation
    if (!validateStep()) {
        return;
    }

    // Move to next step
    if (currentStep < 2) {

        currentStep++;

        showStep();
    }

    // Complete form
    else {

        showSummary();
    }
});


// Back Button
backButton.addEventListener("click", function() {

    if (currentStep > 0) {

        currentStep--;

        showStep();
    }
});


// Function to display summary
function showSummary() {

    // Hide all steps
    steps.forEach(function(step) {
        step.hidden = true;
    });

    // Hide navigation buttons
    nextButton.hidden = true;
    backButton.hidden = true;

    // Show summary
    summary.hidden = false;

    // Display entered details
    document.getElementById("summaryName").textContent =
        "Name: " + nameInput.value;

    document.getElementById("summaryEmail").textContent =
        "Email: " + emailInput.value;

    // Do not display the actual password
    document.getElementById("summaryPassword").textContent =
        "Password: " + "*".repeat(passwordInput.value.length);
}


// Initially display first step
showStep();
