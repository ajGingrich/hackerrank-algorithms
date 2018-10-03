function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const text = lines.join(' ')
    const res = []
    const emails = (text.match(/[a-zA-Z_]+@[a-zA-Z]+\.[a-zA-Z]+/g) || []).map((email) => res.push(email))


    console.log(res.length)
    console.log(res.filter(onlyUnique).sort().join(';'))
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
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
