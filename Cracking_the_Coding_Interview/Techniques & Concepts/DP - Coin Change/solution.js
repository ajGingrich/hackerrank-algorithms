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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    coins = readLine().split(' ');
    coins = coins.map(Number);

    console.log(checkChange(n, coins));

    function checkChange(d, coins) {

        //create empty array that is length of dollars +1
        let combinations = new Array(d+1).fill(0);
        //dollar amount zero nor coin zero have combinations, but set as one for next references
        combinations[0] = 1;

        for (let coin of coins) { //iterate over each coin
            for (let i=1; i<combinations.length; i++) { //determine each dollar amount starting from 1
                if (i >= coin) {
                    combinations[i] += combinations[i-coin]; //add previous combinations
                }
            }
        }

        //return number of combinations for the requested dollar amount
        return combinations[d];
    }
}