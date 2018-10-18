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

    //get all inputs
    var n = readLine().split(' ');
    var arrLength = parseInt(n[0]);
    var numRotations = parseInt(n[1]);

    arr = readLine().split(' ');
    arr = arr.map(Number);

    //check for constraints
    if (arrLength >= 1 && arrLength <= Math.pow(10, 5) && numRotations <= arrLength) {

        var res = arr.slice(numRotations).concat(arr.slice(0, numRotations));
        console.log(res.join(' '));
    }
}
