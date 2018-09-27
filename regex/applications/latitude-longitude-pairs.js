function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const re = /^\([+-]?(([0-9]|[1-8][0-9])(\.[0-9]+)?|90(\.0+)?), [+-]?(([0-9]{1,2}|1[0-7][0-9])(\.[0-9]+)?|180(\.0+)?)\)$/

    for(let i=0; i<n; i++) {
       if(re.test(lines[i])) {
           console.log('Valid')
       } else {
           console.log('Invalid')
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
