function countFractionOnes(str) {
    if (typeof str !== 'string') {
        return -1;
    }

    str = str.slice(12);
    let countOne = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 1) {
            ++countOne
        }
    }
    return countOne;
}


console.log(countFractionOnes("1100000000011010000000000000000000000000000000000000000000000000"));
// Output: 1

console.log(countFractionOnes("0011111110111001100110011001100110011001100110011001100110011010"));
// Output: 21