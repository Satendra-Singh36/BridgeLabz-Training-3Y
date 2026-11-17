// Select HTML elements
const gallery = document.getElementById("gallery");

const modal = document.getElementById("modal");

const modalContent = document.getElementById("modalContent");

const modalImage = document.getElementById("modalImage");

const closeButton = document.getElementById("closeButton");


// Open Modal when clicking an image
gallery.addEventListener("click", function(event) {

    // Check whether clicked element is an image
    if (event.target.tagName === "IMG") {

        // Get clicked image source
        const imageSource = event.target.src;

        // Set image source in modal
        modalImage.src = imageSource;

        // Display modal
        modal.style.display = "flex";
    }

});


// Close Modal when clicking outside
modal.addEventListener("click", function() {

    // Hide modal
    modal.style.display = "none";

});


// Prevent modal from closing when clicking inside
modalContent.addEventListener("click", function(event) {

    // Stop event propagation
    event.stopPropagation();

});


// Close Modal using close button
closeButton.addEventListener("click", function(event) {

    // Prevent event from reaching modal
    event.stopPropagation();

    // Hide modal
    modal.style.display = "none";

});
