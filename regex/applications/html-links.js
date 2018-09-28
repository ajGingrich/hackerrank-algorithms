
// this has correct Regex but incorrect answer..
function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const reLink = RegExp(/(?<=href=")\S+(?=")/)
    const reText = RegExp(/(?<=<a.*>)[A-Za-z].*(?=<\/a>)/)

    for(let i=0; i<n; i++) {
        const linkArray = reLink.exec(lines[i])
        const textArray = reText.exec(lines[i])
        const link = linkArray && linkArray[0]
        const text = textArray && textArray[0]

        if(link) {
         console.log(`${link},${text}`)
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

// python 2 answer
// import re
//
// pat = r'<a href="(.*?)".*?>([\w ,./]*)(?=</)'
//
// N = int(raw_input())
// for _ in range(N):
//     html = raw_input()
//     res = re.findall(pat, html)
//     for link, title in res:
//         print "{},{}".format(link, title.strip())
