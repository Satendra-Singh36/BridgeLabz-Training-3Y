let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
let passed = scores.filter(score => score >= 50).length;
let formattedScores = scores.map((score, index) => `Student ${index + 1}: ${score}`).join("\n");
console.log(`Student Performance Report\n${formattedScores}\nHighest Score: ${highest}\nLowest Score: ${lowest}\nAverage Score: ${average.toFixed(2)}\nStudents Passed: ${passed}`);
