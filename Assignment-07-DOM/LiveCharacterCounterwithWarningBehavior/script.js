// Select HTML elements
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

// Maximum character limit
const maxCharacters = 100;

// Function to update character counter
function updateCounter() {

    // Calculate remaining characters
    const remainingCharacters = maxCharacters - message.value.length;

    // Display remaining characters
    counter.textContent = "Remaining Characters: " + remainingCharacters;

    // Remove previous classes
    counter.classList.remove("warning", "danger");

    // Yellow warning at 20 characters left
    if (remainingCharacters <= 20 && remainingCharacters > 0) {

        counter.classList.add("warning");
    }

    // Red warning at 0 characters left
    else if (remainingCharacters === 0) {

        counter.classList.add("danger");
    }
}

// Prevent typing after 100 characters
message.addEventListener("keydown", function(event) {

    // Allow control keys like Backspace, Delete, Arrow keys
    const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab",
        "Home",
        "End"
    ];

    // Prevent additional characters
    if (
        message.value.length >= maxCharacters &&
        !allowedKeys.includes(event.key) &&
        !(event.ctrlKey || event.metaKey)
    ) {
        event.preventDefault();
    }
});

// Update counter whenever text changes
message.addEventListener("input", updateCounter);

// Reset button functionality
resetButton.addEventListener("click", function() {

    // Clear textarea
    message.value = "";

    // Reset counter
    counter.textContent = "Remaining Characters: 100";

    // Remove warning colors
    counter.classList.remove("warning", "danger");
});
