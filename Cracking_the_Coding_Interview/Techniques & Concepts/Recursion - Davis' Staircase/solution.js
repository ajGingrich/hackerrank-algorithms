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
    let count = 0;

    //use a memory for optimization
    let memory = new Set();
    memory[0] = 0;

    function davisWays (height) {

        //if already exists in memory, return it
        if (memory[height]) {
            return memory[height];
        }

        if (height === 1) {
            memory[1] = 1;
            return memory[1];
        } else if (height === 2) {
            memory[2]= 2
            return memory[2];
        } else if (height === 3) {
            memory[3]= 4
            return memory[3];
        } else {
            //sum of last three numbers in sequence
            memory[height] = davisWays(height-1) + davisWays(height-2) + davisWays(height-3);
            return memory[height];
        }
    }

    var s = parseInt(readLine());
    for(var a0 = 0; a0 < s; a0++){
        var n = parseInt(readLine());
        let res = davisWays(n);
        console.log(res);
    }
}

