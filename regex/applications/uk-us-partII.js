function processData(input) {
    const lines = input.split('\n')
    const n = parseInt(lines.shift())
    const sentences = lines.slice(0, n)
    const t = parseInt(lines[n])
    const words = lines.slice(n+1)

    getDifferences({ words, n, t, sentences, lines })
}

function getDifferences({ words, n, t, sentences, lines }) {
    Array.from(Array(t)).map((_, i) => {
        let count = 0
        const american = words[i].replace(/our/g, 'or')
        const re = RegExp(`(\\b${words[i]}\\b)|(\\b(${american})\\b)`, 'g')

        Array.from(Array(n)).map((_, j) => {
            count += (sentences[j].match(re) || []).length
        })

        console.log(count)
    })
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
