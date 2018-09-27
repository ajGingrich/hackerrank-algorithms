function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()

    for(let i=0; i<n; i++) {
        const codes = lines[i].split(/[-\s]/)
        console.log(`CountryCode=${codes[0]},LocalAreaCode=${codes[1]},Number=${codes[2]}`)
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
