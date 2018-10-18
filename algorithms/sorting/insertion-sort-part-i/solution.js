function processData(input) {
    let lines = input.split('\n');
    let arr = lines[1].split(' ').map(i => parseInt(i));

    insertOnce(arr);
}

function insertOnce(arr) {
    let misplaced = arr[arr.length-1];
    let sorted = false;

    for (let i=arr.length-2; i>=0; i--) {
        if (arr[i] > misplaced) {
            arr[i+1] = arr[i];
            print(arr);
        } else {
            arr[i+1] = misplaced;
            print(arr);
            sorted = true;
            break;
        }
    }

    if (!sorted) {
        arr[0] = misplaced;
        print(arr);
    }
}

function print(arr) {
    console.log(arr.join(" "));
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
