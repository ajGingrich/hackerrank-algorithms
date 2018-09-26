function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()

    for(let i=0; i<n; i++) {
        const reBeginning = /^hackerrank.+/
        const reEnd = /.+hackerrank$/
        const reWholeWorld = /^hackerrank$/

        if(reBeginning.test(lines[i])) {
            console.log(1)
        } else if(reEnd.test(lines[i])) {
            console.log(2)
        } else if(reWholeWorld.test(lines[i])) {
            console.log(0)
        } else {
            console.log(-1)
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input
});

process.stdin.on("end", function () {
   processData(_input);
});
