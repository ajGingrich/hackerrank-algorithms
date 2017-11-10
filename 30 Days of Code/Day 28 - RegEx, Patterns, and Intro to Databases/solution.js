process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var N = parseInt(readLine());
    let res = [];

    for(var a0 = 0; a0 < N; a0++){
        var firstName_temp = readLine().split(' ');
        var firstName = firstName_temp[0];
        var emailID = firstName_temp[1];

        if (isMatch(emailID)) res.push(firstName);
    }

    res.sort();
    printArray(res);
}

function printArray(arr) {
    for (let s of arr) {
        console.log(s);
    }
}

function isMatch(email) {
    const regEx = /.*@gmail.com$/;

    if (regEx.test(email)) return true;
    return false;
}
