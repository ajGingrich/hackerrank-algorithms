function processData(input) {
    //Enter your code here
    let first = [];
    let second = [];

    //split by a line
    let arr = input.split(/\r?\n/);

    //first line is the length
    let length = arr.shift();

    for (let i=0; i<length; i++) {

        if (arr[i][0] === "1") {
            first.push(arr[i].slice(2));
        } else if (arr[i] === "2") {
            //copy from first stack if second is empty
            if (second.length < 1) copyFirst();
            second.shift();
        } else if (arr[i] === '3') {
            //copy from first stack if second is empty
            if (second.length < 1) copyFirst();
            console.log(second[0]);
        }
    }

    function copyFirst() {
        while(first.length > 0) second.push(first.shift());
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
