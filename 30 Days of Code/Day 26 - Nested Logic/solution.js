function processData(input) {
    const data = input.split('\n');
    const actual = data[0].split(" ");
    const expected = data[1].split(" ");

    console.log(libraryFine(makeIntArray(actual), makeIntArray(expected)));
}

function libraryFine(actual, expected) {
    // year
    if (actual[2] < expected[2]) return 0;
    if (actual[2] > expected[2]) return 10000;

    // month
    if (actual[1] < expected[1]) return 0;
    if (actual[1] > expected[1]) return 500 * (actual[1] - expected[1]);

    // day
    if (actual[0] > expected[0]) return 15 * (actual[0] - expected[0]);
    return 0;
}

function makeIntArray(arr) {
    let res = [];
    for (let item of arr) {
        res.push(parseInt(item));
    }
    return res;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
