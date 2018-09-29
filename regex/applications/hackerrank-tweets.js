function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const re = /^.*[hH][aA][cC][kK][eE][rR][rR][aA][nN][kK].*$/
    let count = 0

    for(let i=0; i<n; i++) {
        if(re.test(lines[i])) count++
    }

    console.log(count)
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
