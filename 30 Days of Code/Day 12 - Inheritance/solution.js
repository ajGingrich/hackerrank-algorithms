'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
main();
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }

    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {

    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification);
        this.testScores = scores;
    }

    calculate() {
        let a = this.average(this.testScores);
        if (a >= 90) return 'O';
        if (a >= 80) return 'E';
        if (a >= 70) return 'A';
        if (a >= 55) return 'P';
        if (a >= 40) return 'D';
        return 'T';
    }

    average(arr) {
        let sum = 0;
        for (let i of arr) {
            sum += i;
        }
        return sum/arr.length;
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)

    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}


