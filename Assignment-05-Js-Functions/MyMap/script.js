Array.prototype.myMap = function (callback) {

    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

function showResult() {

    let numbers = [1, 2, 3];

    let output = numbers.myMap(num => num * 2);

    console.log("Original Array:", numbers);
    console.log("MyMap Result:", output);
}
