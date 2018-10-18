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
    let brackets = ["(", ")", "[", "]", "{", "}"];

    let t = parseInt(readLine());
    for(let a0 = 0; a0 < t; a0++){
        let expression = readLine();
        let arr = expression.split('');

        let result = 'YES';
        let stack = [];
        let i, bracketType, BracketPosition;
        //check if value is null
        if (arr === null) {
            result = 'NO';
        }

        for (i=0; i < arr.length; i++) {
            bracketType = arr[i];

            //check which bracketType it is
            BracketPosition = brackets.indexOf(bracketType);

            //check if it is not a bracket at all
            if (BracketPosition === -1) {
                result = 'NO';
            }
            else {
                //if a first bracket, push the partner
                if (BracketPosition % 2 === 0) {
                    stack.push(BracketPosition + 1);
                } else {
                    if (stack.pop() !== BracketPosition) {
                        result = 'NO';
                    }
                }
            }
        }
        if (stack.length != 0) {
            result = "NO";
        }
        console.log(result);
    }
}