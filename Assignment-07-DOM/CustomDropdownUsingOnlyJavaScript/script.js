// Select HTML elements
const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const selectedValue = document.getElementById("selectedValue");


// Button Click Event
dropdownButton.addEventListener("click", function() {

    // Show or hide dropdown options
    dropdownOptions.classList.toggle("show");

});


// Option Click Event
dropdownOptions.addEventListener("click", function(event) {

    // Check if clicked element is an option
    if (event.target.classList.contains("option")) {

        // Get selected option text
        const selectedText = event.target.textContent;

        // Update button text
        dropdownButton.textContent = selectedText + " ▼";

        // Update selected value
        selectedValue.textContent = "Selected Course: " + selectedText;

        // Close dropdown
        dropdownOptions.classList.remove("show");

    }

});
// Outside Click Event using Capturing Phase
document.addEventListener("click", function(event) {

    // Check whether click happened outside dropdown
    if (!dropdown.contains(event.target)) {

        // Close dropdown
        dropdownOptions.classList.remove("show");

    }

}, true); // true = Capturing Phase
