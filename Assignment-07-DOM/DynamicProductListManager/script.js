// Select HTML elements
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Add Product Function
function addProduct() {

    const productName = productInput.value.trim();

    // Check empty input
    if (productName === "") {
        alert("Please enter a product name!");
        return;
    }

    // Create list item
    const listItem = document.createElement("li");

    // Create product name
    const span = document.createElement("span");
    span.className = "product-name";
    span.textContent = productName;

    // Create Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    // Append elements
    listItem.append(span, editButton, deleteButton);

    // Add product to UL
    productList.appendChild(listItem);

    // Clear input
    productInput.value = "";
}

// Add button event
addButton.addEventListener("click", addProduct);


// Event Delegation for Edit and Delete
productList.addEventListener("click", function(event) {

    const listItem = event.target.closest("li");

    if (!listItem) return;

    // Delete Product
    if (event.target.classList.contains("delete-btn")) {

        listItem.remove();
    }

    // Edit Product
    else if (event.target.classList.contains("edit-btn")) {

        startEditing(listItem);
    }

    // Save edited product
    else if (event.target.classList.contains("save-btn")) {

        saveEditing(listItem);
    }
});


// Start Editing Function
function startEditing(listItem) {

    // Avoid multiple edit modes
    if (listItem.querySelector(".edit-input")) {
        return;
    }

    const productName = listItem.querySelector(".product-name");

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = productName.textContent;
    editInput.className = "edit-input";

    const editButton = listItem.querySelector(".edit-btn");
    editButton.textContent = "Save";
    editButton.className = "save-btn";

    productName.replaceWith(editInput);

    editInput.focus();

    // Save when Enter is pressed
    editInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            saveEditing(listItem);
        }
    });

    // Save when clicking outside
    editInput.addEventListener("blur", function() {
        saveEditing(listItem);
    });
}


// Save Editing Function
function saveEditing(listItem) {

    const editInput = listItem.querySelector(".edit-input");

    // Check whether editing is active
    if (!editInput) return;

    const updatedName = editInput.value.trim();

    // Create updated product name
    const span = document.createElement("span");
    span.className = "product-name";

    // Keep old name if input is empty
    span.textContent = updatedName || editInput.defaultValue;

    editInput.replaceWith(span);

    // Change Save button back to Edit
    const saveButton = listItem.querySelector(".save-btn");

    if (saveButton) {
        saveButton.textContent = "Edit";
        saveButton.className = "edit-btn";
    }
}
