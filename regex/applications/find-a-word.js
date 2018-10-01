function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const sentences = []
    const words = []

    // get sentences input
    for(let i=0; i<n; i++) {
        sentences.push(lines.shift())
    }

    const t = lines.shift()

    // get words input
    for(let j=0; j<t; j++) {
        words.push(lines.shift())
    }

    for(let m=0; m<words.length; m++) {
        let count = 0

        for(let p=0; p<sentences.length; p++) {
            const re = RegExp(`\\b${words[m]}\\b`, 'g')
            const matches = (sentences[p].match(re) || []).length

            count += matches
        }
        console.log(count)
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
