// do with a hashmap

function twoStrings(s1, s2) {
    let res = 'NO'
    s1.split('').forEach(c => {
        if (s2.includes(c)) res = 'YES'
    })

    return res
}
