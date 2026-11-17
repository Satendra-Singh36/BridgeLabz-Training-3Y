function runTaskScheduler() {

    console.log("Start");

    // Macrotask: setTimeout callback executes after synchronous code and microtasks.
    setTimeout(() => {
        console.log("Macrotask: setTimeout");
    }, 0);

    // Microtask: Promise callback executes before the next macrotask.
    Promise.resolve().then(() => {
        console.log("Microtask: Promise");
    });

    console.log("Synchronous Log");

    console.log("End");

    // JavaScript first executes all synchronous code.
    // After synchronous execution, the event loop processes microtasks.
    // Microtasks are completed before the next macrotask is executed.
}

