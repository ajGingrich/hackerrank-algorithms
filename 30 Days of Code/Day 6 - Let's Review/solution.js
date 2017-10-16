function processData(input) {
    let lines = input.split('\n');
    let t = lines[0];

    for (let i=1; i<=t; i++) {
        let arr = lines[i].split('');

        let even = makeArray('even', arr);
        //add space
        even.push(' ');

        let odd = makeArray('odd', arr);
        print(even.concat(odd));
    }
}

function makeArray(index, arr) {
    let res = [];
    if (index === 'even') {
        for (let i=0; i<arr.length; i+=2) {
            res.push(arr[i]);
        }
    } else if (index === 'odd') {
        for (let i=1; i<arr.length; i+=2) {
            res.push(arr[i]);
        }
    }
    return res;
}

function print(arr) {
    console.log(arr.join(''));
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
