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
    a = readLine().split(' ');
    a = a.map(Number);

    let obj = {};
    for (let i=0; i<n; i++) {
        if (obj[a[i]] === undefined) {
            obj[a[i]] = 1;
        }
        else {
            obj[a[i]] += 1;
        }
    }
    var keys = Object.keys(obj);
    for (let i=0; i<keys.length; i++) {
        if (obj[keys[i]] == 1) {
            console.log(keys[i]);
            break;
        }
    }
}
