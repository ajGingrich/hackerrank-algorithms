function alternatingCharacters(s) {
    let numDeletions = 0;
    const a = s.split('');

    for (let i=0; i < a.length - 1; i++) {
        if (a[i] == a[i+1]) {
            numDeletions++;
        }
    }

    return numDeletions;
}
