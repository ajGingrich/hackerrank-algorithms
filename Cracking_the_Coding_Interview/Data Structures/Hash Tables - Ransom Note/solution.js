process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    let result = 'Yes';
    //create a map with keys and number of occurences
    let map = new Map;
    for (let i=0; i<magazine.length; i++) {
        //if word already exists, increase the number of occurrences by 1
        if (map.has(magazine[i])) {
            let value = map.get(magazine[i]);
            value++;
            map.set(magazine[i], value);
        } else {
            //add a key and set number of occurences to 1
            map.set(magazine[i], 1);
        }
    }
    //check if ransom note is in the map and delete it
    for (let i=0; i<ransom.length; i++) {
        if (map.has(ransom[i])) {
            let value = map.get(ransom[i]);
            //if over 1, just lower value and otherwise delete it compeltely
            if (value > 1) {
                value--;
                map.set(ransom[i], value);
            } else {
                map.delete(ransom[i]);
            }
        } else {
            result = "No";
            break;
        }
    }
    console.log(result);
}
