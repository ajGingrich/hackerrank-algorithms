function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const ipv4 = /^(((1[0-9]{2})|(2[0-5]{2})|([0-9]{1,2}))\.){3}((1[0-9]{2})|(2[0-5]{2})|([0-9]{1,2}))$/
    const ipv6 = /([a-f0-9]{0,4}:){7}[a-f0-9]{4}/

    for (let i=0; i < n; i++) {
        const direction = lines[i]

        if(ipv4.test(direction)) {
            console.log('IPv4')
        } else if(ipv6.test(direction)) {
            console.log('IPv6')
        } else {
            console.log('Neither')
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
