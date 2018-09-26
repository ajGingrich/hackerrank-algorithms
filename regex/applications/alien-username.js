function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()

    for(let i=0; i<n; i++) {
        const re = /^[_.][0-9]+[a-zA-Z]*_{0,1}$/

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

// /^[_.][0-9]+[a-zA-Z]*_?$/ --better use of optional _
