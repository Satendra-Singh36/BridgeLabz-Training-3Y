// Profile Promise
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() < 0.5) {
                reject("Profile Failed");
            } else {
                resolve("Profile Loaded");
            }

        }, 2000);
    });
}

// Posts Promise
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() < 0.5) {
                reject("Posts Failed");
            } else {
                resolve("Posts Loaded");
            }

        }, 1500);
    });
}

// Messages Promise
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() < 0.5) {
                reject("Messages Failed");
            } else {
                resolve("Messages Loaded");
            }

        }, 1000);
    });
}

// Main Function
async function loadDashboard() {

    // Start Time
    const startTime = Date.now();

    try {

        // Promise.allSettled()
        const results = await Promise.allSettled([
            loadProfile(),
            loadPosts(),
            loadMessages()
        ]);

        // Module Names
        const modules = ["Profile", "Posts", "Messages"];

        // Check Results
        results.forEach((result, index) => {

            if (result.status === "fulfilled") {
                console.log(modules[index] + " Success: " + result.value);
            } else {
                console.log(modules[index] + " Failed: " + result.reason);
            }

        });

    }
    catch (error) {
        console.log(error);
    }

    // End Time
    const endTime = Date.now();

    // Total Time
    console.log("Total Time Taken: " + (endTime - startTime) + " ms");

}

// Function Call
loadDashboard();
