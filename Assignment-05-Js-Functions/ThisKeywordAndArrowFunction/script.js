// Q3: Arrow Function and this Keyword

// Object using Arrow Function
let user = {
    name: "Satendra",

    // Arrow function does not have its own this
    showName: () => {
        console.log("Arrow Function Name:", this.name);
    }
};

// Calling arrow function
function showArrowName() {
    user.showName();
}


// Fix using Normal Function
let user2 = {
    name: "Satendra",

    // Normal function has its own this
    showName: function () {
        console.log("Normal Function Name:", this.name);
    }
};

// Calling normal function
function showNormalName() {
    user2.showName();
}
