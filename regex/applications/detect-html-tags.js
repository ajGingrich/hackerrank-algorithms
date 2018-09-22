function processData(input) {
    const lines = input.split('\n')
    const n = lines[0]
    const html = []
    const res = []

    for (let i=1; i<=n; i++) html.push(lines[i])

    const re = /(?<=<\s*)([a-zA-Z-0-9]+)(?=(.*\/>)|(.*>.+<(\/\1)>))/g
    const matches = html.join('').match(re)

    for (let j=0; j<matches.length; j++) {
      if(res.indexOf(matches[j]) === -1) {
        res.push(matches[j])
      }
    }
    console.log(res.sort().join(';'))
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
