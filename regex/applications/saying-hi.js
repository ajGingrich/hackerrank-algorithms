function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const re = /^[Hh][Ii]\s[^Dd]/

    for(let i=0; i<n; i++) {
      if(re.test(lines[i])) {
        console.log(lines[i])
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

// The first character must be the letter H or h.
// The second character must be the letter I or i.
// The third character must be a single space (i.e.: \s).
// The fourth character must not be the letter D or d.
