// Step 1: Take Order
function takeOrder() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.5) {
                resolve("Step 1: Order taken");
            } else {
                reject("Order failed");
            }

        }, Math.random() * 1000 + 1000);

    });

}


// Step 2: Prepare Food
function prepare() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.5) {
                resolve("Step 2: Food prepared");
            } else {
                reject("Food preparation failed");
            }

        }, Math.random() * 1000 + 1000);

    });

}


// Step 3: Pack Food
function pack() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.5) {
                resolve("Step 3: Package ready");
            } else {
                reject("Packing failed");
            }

        }, Math.random() * 1000 + 1000);

    });

}


// Step 4: Dispatch Order
function dispatch() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.5) {
                resolve("Step 4: Out for delivery");
            } else {
                reject("Dispatch failed");
            }

        }, Math.random() * 1000 + 1000);

    });

}


// Step 5: Deliver Order
function deliver() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.5) {
                resolve("Delivery completed!");
            } else {
                reject("Delivery failed");
            }

        }, Math.random() * 1000 + 1000);

    });

}


// Main Async Pipeline Function
async function runPipeline() {

    console.log("Start Pipeline");

    try {

        // Wait for Order
        console.log(await takeOrder());

        // Wait for Food Preparation
        console.log(await prepare());

        // Wait for Packing
        console.log(await pack());

        // Wait for Dispatch
        console.log(await dispatch());

        // Wait for Delivery
        console.log(await deliver());

    }
    catch (error) {

        // If any step fails, catch block executes
        console.log("Pipeline failed!");
        console.log("Reason:", error);

    }

}


// Function Call
runPipeline();
