function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Test completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deploy completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebrate! Frontend pipeline completed");
    }, 1000);
}

// Nested callbacks - Callback Hell
function startCallbackPipeline() {
    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate();
                });
            });
        });
    });
}

// Promise-based function
function runStage(stage) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stage + " completed");
            resolve();
        }, 1000);
    });
}

// Async/Await - Clean approach
async function startAsyncPipeline() {
    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");

    console.log("Frontend pipeline completed");
}
