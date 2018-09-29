// solution from discussion -- NOT MINE
function processData(input) {
    input = input.split('\n')
    var n = input.shift();
    input = input.join(' ');
    console.log(generateOutput(detectFullTags(input)));
}

var detectFullTags = function (html) {
    const tagsRE = /<\s*(\w+)\s*(.*?)>/g;
    var tags = {};
    html.replace(tagsRE, function (_, tag, attributes) {
        if (!tags[tag])
            tags[tag] = [];
        if (attributes)
            tags[tag].push(...extractAttributes(attributes));
    });
    return tags;
}

var extractAttributes = function (htmlAttribs) {
    const attribRE = /(\w+)(?==["'])/g;
    return htmlAttribs.match(attribRE);
}

var generateOutput = function (tags) {
    var output = [];
    Object.keys(tags)
        .sort()
        .forEach(function (tag) {
            output.push(tag + ':' +
                Array.from(new Set(tags[tag]))
                .sort()
                .join(','))
        });
    return output.join('\n');
}


// not working.. but waste of time to match html with regex.
// regex is fine
function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const reTags = /(?<=<)[a-z]+/
    const reAttr = /(?<=\s)[a-z]+(?==")/
    const res = {}


    for(let i=0; i<n; i++) {
       tags.match
    }

    Object.keys(res).map((tag) => {
        let attributes = ''
        for(let m=0; m<res[tag].length; m++) {
            attributes += `${res[tag][m]}${m === res[tag].length - 1 ? '' : ','}`
        }
        console.log(`${tag}:${attributes}`)
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
