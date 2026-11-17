class FitnessAnalytics {

    // Constructor
    constructor(workoutData) {

        // Check if dataset is empty
        if (!Array.isArray(workoutData) || workoutData.length === 0) {

            throw new Error("Workout dataset cannot be empty!");

        }

        this.workoutData = workoutData;

    }


    // 1. Get Active Users using filter()
    getActiveUsers() {

        return this.workoutData.filter(function(user) {

            return user.steps > 7000;

        });

    }


    // 2. Get Average Calories using reduce()
    getAverageCalories() {

        const totalCalories = this.workoutData.reduce(function(total, user) {

            return total + user.calories;

        }, 0);

        return totalCalories / this.workoutData.length;

    }


    // 3. Get User Summary using map()
    getUserSummary() {

        return this.workoutData.map(function(user) {

            return `${user.user} completed ${user.steps} steps and burned ${user.calories} calories.`;

        });

    }

}


// Workout Data
const workoutData = [

    { user: "A", steps: 8000, calories: 300 },

    { user: "B", steps: 12000, calories: 500 },

    { user: "C", steps: 4000, calories: 200 }

];


// Create FitnessAnalytics Object
try {

    const fitness = new FitnessAnalytics(workoutData);


    // 1. Active Users
    console.log("----- ACTIVE USERS -----");

    console.log(fitness.getActiveUsers());


    // 2. Average Calories
    console.log("\n----- AVERAGE CALORIES -----");

    console.log(fitness.getAverageCalories());


    // 3. User Summary
    console.log("\n----- USER SUMMARY -----");

    console.log(fitness.getUserSummary());


} catch (error) {

    console.log("Error:", error.message);

}


// Test Empty Dataset
console.log("\n----- EMPTY DATASET TEST -----");

try {

    const emptyFitness = new FitnessAnalytics([]);

} catch (error) {

    console.log("Error:", error.message);

}
