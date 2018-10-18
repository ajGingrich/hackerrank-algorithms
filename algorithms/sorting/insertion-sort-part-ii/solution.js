function processData(input) {
    const lines = input.split('\n');
    const arr = lines[1].split(' ').map(a => parseInt(a));

    insertionSort(arr);
}

function print(arr) {
    console.log(arr.join(" "));
}

function insertionSort(arr) {
    let i = 1;
    while (i < arr.length) {
        let x = arr[i];
        let j = i-1;
        while (j >= 0 && arr[j] > x) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = x;
        print(arr);
        i++;
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
