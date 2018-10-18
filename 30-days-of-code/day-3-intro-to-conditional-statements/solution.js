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
    console.log(isWeird(N));
}

function isWeird(num) {
    if (num % 2 != 0) return 'Weird';
    if (num >= 2 && num <= 5) return 'Not Weird';
    if (num >= 6 && num <= 20) return 'Weird';
    if (num > 20) return 'Not Weird';
}
