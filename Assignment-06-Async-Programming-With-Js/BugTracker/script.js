function getBugs() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let isSuccess = Math.random() > 0.3;

            if (isSuccess) {

                let bugs = [
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ];

                resolve(bugs);

            } else {

                reject("API request failed!");
            }

        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.log("Bugs fetched successfully:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
