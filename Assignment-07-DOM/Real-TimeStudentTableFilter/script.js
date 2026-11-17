// Select HTML elements
const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");


// Get all student rows
const studentRows = studentTable.getElementsByTagName("tr");


// Add input event listener
searchInput.addEventListener("input", function() {

    // Get search value and convert to lowercase
    const searchValue = searchInput.value.toLowerCase().trim();

    // Track matching rows
    let matchingRows = 0;


    // Loop through all student rows
    for (let i = 0; i < studentRows.length; i++) {

        // Get complete row text
        const rowText = studentRows[i].textContent.toLowerCase();

        // Check whether row matches search
        if (rowText.includes(searchValue)) {

            // Show matching row
            studentRows[i].style.display = "";

            matchingRows++;

        } else {

            // Hide non-matching row
            studentRows[i].style.display = "none";

        }

    }
    // Show or hide no results message
    if (matchingRows === 0) {

        noResults.hidden = false;

    } else {

        noResults.hidden = true;

    }
});
