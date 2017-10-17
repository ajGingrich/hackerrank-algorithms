function processData(input) {
    let lines = input.split('\n');
    let n = parseInt(lines[0]);
    let map = new Map();

    for (let i=1; i<=n; i++) {
        let data = lines[i].split(' ');
        map.set(data[0], data[1]);
    }

    //unknown number of queries
    let a = n+1;
    while (a < lines.length) {
        getNumber(lines[a]);
        a++;
    }

    function getNumber(name) {
        if (map.has(name)) {
            console.log(name + "=" + map.get(name));
        } else {
            console.log('Not found');
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
