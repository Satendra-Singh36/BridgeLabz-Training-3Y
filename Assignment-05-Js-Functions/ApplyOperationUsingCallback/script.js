// Callback Function with Array Operations

// Function to perform operation on array
function applyOperation(numbers, operation) {

    // Using map() to apply callback on each number
    let result = numbers.map(operation);

    console.log("Original Array:", numbers);
    console.log("Result:", result);
}

// Function to double each number
function doubleNumbers() {

    let numbers = [1, 2, 3, 4];

    // Callback function
    function double(num) {
        return num * 2;
    }

    applyOperation(numbers, double);
}

// Function to square each number
function squareNumbers() {

    let numbers = [1, 2, 3, 4];

    // Callback function
    function square(num) {
        return num * num;
    }

    applyOperation(numbers, square);
}
