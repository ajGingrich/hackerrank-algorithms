// fails two time cases

function minimumAbsoluteDifference(arr) {
    let min = Number.MAX_SAFE_INTEGER;

    for (let i=0; i< arr.length - 1; i++) {
        for (let j=i+1; j < arr.length; j++) {
            const absoluteDiff = Math.abs(arr[i] - arr[j])
            if (absoluteDiff < min) {
                min = absoluteDiff
            }
        }
    }

    return min;
}

// beats the time, by sorting the numbers only the neighbors can possibly be smallest max
function minimumAbsoluteDifference(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    let sorted = arr.sort((a,b) => a - b)

    for (let i=0; i < sorted.length - 1; i++) {
        const absoluteDiff = Math.abs(arr[i] - arr[i+ 1])
        if (absoluteDiff < min) {
            min = absoluteDiff
        }
    }

    return min;
}
