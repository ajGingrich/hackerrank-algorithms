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

//wip

// function processData(input) {
//     const lines = input.split('\n')
//     const n = lines.shift()
//     const reLink = RegExp(/(?<=href=")\S+(?=")/)
//     const reText = RegExp(/(?<=<a.*>)[A-Za-z\s\.]+(?=<\/a>)/)
//     const res = []
//
//     for(let i=0; i<n; i++) {
//         const linkArray = reLink.exec(lines[i])
//         const textArray = reText.exec(lines[i])
//
//         if(textArray && textArray.length === linkArray.length) {
//            for(let k=0; k<linkArray.length; k++) {
//                 res.push({ link: linkArray[0], text: textArray[0] })
//            }
//         }
//     }
//
//     for(let m=0; m<res.length; m++) {
//         if(res[m].text) {
//           console.log(`${res[m].link},${res[m].text}`)
//         } else {
//           console.log(`${res[m].link}`)
//         }
//     }
// }
//
//
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
//    processData(_input);
// });
