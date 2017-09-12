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
    var a = readLine();
    var b = readLine();

    //split into arrays
    let arrA = a.split('');
    let arrB = b.split('');
    let objA = {};
    let objB = {};
    let numRemovals = 0;

    //create objects for counting duplicates
    for (let i=0; i<arrA.length; i++) {
        if (objA[arrA[i]] === undefined) {
            objA[arrA[i]] = 1;
        }
        else {
            objA[arrA[i]] += 1;
        }

    }
    for (let i=0; i<arrB.length; i++) {
        if (objB[arrB[i]] === undefined) {
            objB[arrB[i]] = 1;
        }
        else {
            objB[arrB[i]] += 1;
        }
    }

    //get Keys
    let aKeys = Object.keys(objA);
    let bKeys = Object.keys(objB);

    ///check how many removals for each Array
    for (let i=0; i<aKeys.length; i++) {
        if (bKeys.indexOf(aKeys[i]) != -1) {
            numRemovals += Math.max(objA[aKeys[i]], objB[aKeys[i]]) - Math.min(objA[aKeys[i]], objB[aKeys[i]]);
            //remove from bKeys
            bKeys.splice(bKeys.indexOf(aKeys[i]), 1);
        }
        else {
            numRemovals += objA[aKeys[i]];
        }
    }
    for (let i=0; i<bKeys.length; i++) {
        if (aKeys.indexOf(bKeys[i]) != -1) {
            numRemovals += Math.max(objA[bKeys[i]], objB[bKeys[i]]) - Math.min(objA[bKeys[i]], objB[bKeys[i]]);
        }
        else {
            numRemovals += objB[bKeys[i]];
        }
    }
    console.log(numRemovals);

}
