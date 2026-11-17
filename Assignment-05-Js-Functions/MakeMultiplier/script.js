function makeMultiplier(multiplier) {

    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);

function showResult() {
    console.log(triple(5));
}
