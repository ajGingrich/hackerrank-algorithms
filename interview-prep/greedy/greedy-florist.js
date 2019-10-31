function getMinimumCost(k, c) {
    let res = 0;
    let numberPurchasedPerPerson = 0;
    const sorted = c.sort((a, b) => b - a);

    for (let i=0; i< sorted.length; i++) {
        res += (sorted[i] * (1 + numberPurchasedPerPerson));

        if ((i+1) % k === 0) {
            numberPurchasedPerPerson++;
        }
    }

    return res;
}
