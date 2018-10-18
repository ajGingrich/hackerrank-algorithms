function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

function fibonacci(n) {
    var sum = 0;

    if (n == 0) {
        return 0;
    }
    else if (n ==1 ) {
        return 1;
    }
    //set constraint with 40
    else if (n > 1 && n < 40) {
        sum = fibonacci(n-1) + fibonacci(n-2);
        return sum;
    }
}