function processData(input) {
    const lines = input.split('\n')
    const n = lines.shift()
    const re = /^[0-9]+\s(C|(CPP)|(JAVA)|(PYTHON)|(PHP)|(PERL)|(RUBY)|(CSHARP)|(HASKELL)|(CLOJURE)|(BASH)|(SCALA)|(ERLANG)|(CLISP)|(LUA)|(BRAINFUCK)|(JAVASCRIPT)|(GO)|(D)|(OCAML)|(R)|(PASCAL)|(SBCL)|(DART)|(GROOVY)|(OBJECTIVEC))$/

    for(let i=0;i<n;i++) {
        if(re.test(lines[i])) {
            console.log('VALID')
        } else {
            console.log('INVALID')
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
