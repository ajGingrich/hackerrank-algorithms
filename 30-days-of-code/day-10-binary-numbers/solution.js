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
    var n = parseInt(readLine());
    const binary = n.toString(2);
    console.log(consecutiveCharacters(binary));
}

function consecutiveCharacters(string) {
    let res = 1;
    let max = 1;

    for (let i=1; i<string.length; i++) {
        if (string[i] === string[i-1]) {
            res++
            if (res > max) max = res;
        } else {
            res = 1
        }
    }
    return max;
}