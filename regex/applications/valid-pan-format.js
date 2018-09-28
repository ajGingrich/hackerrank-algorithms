function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const re = /^[A-Z]{5}[0-9]{4}[A-Z]$/

    for(let i=0; i<n; i++) {
      if(re.test(lines[i])) {
        console.log('YES')
      } else {
        console.log('NO')
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

// Each char is an uppercase letter
// Each digit lies between 0 and 9
// The length of the PAN number is always 10
// Every character in PAN is either char or digit satisfying the above constraints.

// For every PAN number listed, print YES if it is valid and NO if it isn't.
