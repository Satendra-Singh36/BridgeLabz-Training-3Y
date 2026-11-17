function deployServer(serverName, delay) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() > 0.2) {
                resolve(serverName + " deployment completed");
            } else {
                reject(serverName + " deployment failed");
            }

        }, delay);
    });
}

function manageDeployment() {

    const serverA = deployServer("Server A", 2000);
    const serverB = deployServer("Server B", 3000);

    Promise.all([serverA, serverB])
        .then((results) => {
            console.log("Deployment completed for all servers");
            console.log(results);
        })
        .catch((error) => {
            console.log("Deployment Error:", error);
        });

    Promise.race([serverA, serverB])
        .then((result) => {
            console.log("Fastest response:", result);
        })
        .catch((error) => {
            console.log("Race Error:", error);
        });
}
