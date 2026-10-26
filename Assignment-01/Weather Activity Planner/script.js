let temperature = 12;
let isRaining = false;
let windSpeed = 25;

if (isRaining || (temperature < 15 && windSpeed > 20)) {
    console.log(isRaining ? "Stay indoors with hot coffee." : "Too cold and windy — stay home.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else {
    console.log("Perfect day for a walk.");
}