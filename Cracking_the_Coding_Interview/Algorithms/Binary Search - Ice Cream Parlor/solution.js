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
        var m = parseInt(readLine());
        var n = parseInt(readLine());
        a = readLine().split(' ');
        a = a.map(Number);

        //create the map with each key value pair for fast access
        let map = new Map();
        for (let i=0; i<n; i++) {
            //if word already exists, increase the number of occurrences by 1
            if (map.has(a[i])) {
                let value = map.get(a[i]);
                value++;
                map.set(a[i], value);
            } else {
                //add a key and set number of occurences to 1
                map.set(a[i], 1);
            }
        }
        let firstValue = 0;
        let secondValue = 0;

        for (let i=0; i<n; i++) {
            let difference = m - a[i];
            if (map.has(difference) && difference !== a[i]) {
                firstValue = a.indexOf(a[i]) + 1;
                secondValue = a.indexOf(difference) + 1;
                break;
            } else if (map.has(difference) && difference === a[i]) {
                //check that map has two occurrences of number
                if (map.get(a[i]) >= 2) {
                    firstValue = a.indexOf(a[i]) + 1;
                    //replace number in array
                    a.splice(a.indexOf(a[i]), 1, "!");
                    secondValue = a.indexOf(difference) + 1;
                    break;
                }
            }
        }
        console.log(firstValue + " " + secondValue);
    }
}