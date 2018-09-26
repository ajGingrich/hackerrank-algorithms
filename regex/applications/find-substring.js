function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const words = []

    for (let i=0; i < n; i++) {
        const individualWords = lines.shift().split(/[^a-zA-Z0-9\_]/)
        for (let m=0; m<individualWords.length; m++) {
            words.push(individualWords[m])
        }
    }

    const s = lines.shift()

    for (let k=0; k<s; k++) {
      let count = 0
      const tester = lines.shift()
      for (let j=0; j< words.length; j++) {
        const re = RegExp(`${tester}`)
        if(re.test(words[j].slice(1, words[j].length -1))) count++
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
