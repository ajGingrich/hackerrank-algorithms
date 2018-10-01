function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const re = /^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}$/

    for(let i=0;i<n;i++) {
        if(re.test(lines[i])) {
            console.log('VALID')
        } else {
            console.log('INVALID')
        }
    }
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
