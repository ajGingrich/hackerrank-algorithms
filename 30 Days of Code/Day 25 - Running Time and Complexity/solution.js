function processData(input) {
    const data = input.split('\n');
    const length = parseInt(data[0]);

    for (let i=1; i<=length; i++) {
        const num = parseInt(data[i]);
        console.log(isPrime(num));
    }
}

function isPrime(n) {
    if (n == 1) return 'Not prime';
    if (n == 2) return 'Prime';
    if (n % 2 == 0) return 'Not prime';

    for (let i=3; i <= Math.sqrt(n); i+=2) {
        if (n % i == 0) return 'Not prime';
    }
    return 'Prime';
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
