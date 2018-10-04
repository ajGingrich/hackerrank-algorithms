function processData(input) {
    const times = (input.match(/(?<=class="relativetime">).+(?=<\/span>)/g) || []).map(res => res)
    const questions = (input.match(/(?<=question-hyperlink">).*(?=<\/a>)/g) || []).map(res => res)
    const identifiers = (input.match(/(?<=id="question-summary-)[0-9]+(?=">)/g) || []).map(res => res)


    Array.from(Array(questions.length)).map((_, i) => console.log(`${identifiers[i]};${questions[i]};${times[i]}`))
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
