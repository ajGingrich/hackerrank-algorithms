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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        arr = readLine().split(' ');
        arr = arr.map(Number);
        var count = 0;
        var result = mergeSort(arr);
        process.stdout.write("" + count + "\n");
    }

    function mergeSort(arr) {
        if (arr.length < 2) {
            return arr;
        }
        let middle = Math.floor(arr.length/2);
        let left = arr.slice(0, middle);
        let right = arr.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        let temp = [];

        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                temp.push(left.shift());
            } else {
                temp.push(right.shift());
                count += left.length;
            }
        }
        return temp.concat(left.slice()).concat(right.slice());
    }
}
