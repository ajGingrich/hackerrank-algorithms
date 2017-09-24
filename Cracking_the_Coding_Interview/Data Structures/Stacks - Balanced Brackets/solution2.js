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

    const brackets = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);

    let t = parseInt(readLine());
    for(let a0 = 0; a0 < t; a0++){
        let expression = readLine();
        let arr = expression.split('');
        isMatched(arr);
    }

    function isMatched(expression) {
        let stack = [];
        let result = "YES";

        for (let c of expression) {
            if (brackets.has(c)) {
                stack.push(brackets.get(c))
            } else {
                if (stack.length === 0 || c != stack[stack.length -1]) {
                    result = "NO";
                    break;
                }
                stack.pop();
            }
        }
        if (stack.length != 0) {
            result = "NO";
        }
        console.log(result);
    }
}

