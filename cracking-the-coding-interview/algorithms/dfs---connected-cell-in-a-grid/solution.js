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
    var n = parseInt(readLine());
    var m = parseInt(readLine());
    var grid = [];
    var regions = [];
    for(grid_i = 0; grid_i < n; grid_i++){
        grid[grid_i] = readLine().split(' ');
        grid[grid_i] = grid[grid_i].map(Number);
    }

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            let region = search(grid, i, j);
            if (region > 0) regions.push(region);
        }
    }

    console.log(Math.max(...regions));

    function search(arr, i, j) {
        if (i < 0 || j < 0 || i >= arr.length || j >= arr[0].length) return 0;
        if (arr[i][j] === 0) return 0;

        let count = 1;
        //set cell to zero so it's not counted again
        arr[i][j] = 0;

        count += search(arr, i - 1, j - 1);
        count += search(arr, i - 1, j);
        count += search(arr, i - 1, j + 1);
        count += search(arr, i, j - 1);
        count += search(arr, i, j + 1);
        count += search(arr, i + 1, j - 1);
        count += search(arr, i + 1, j);
        count += search(arr, i + 1, j + 1);

        return count;
    }
}
