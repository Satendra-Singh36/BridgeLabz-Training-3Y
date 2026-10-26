let marks = [85, 90, 78, 88, 92];
let total = marks.reduce((sum, mark) => sum + mark, 0);
let average = total / marks.length;
let percentage = (total / 500) * 100;

if (marks.some(mark => mark < 35) || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);