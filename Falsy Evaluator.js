function evaluateTruthiness(arr){
    let res = {};

    res.trufie = arr.filter(Boolean);
    res.falsy = [];

    for (const element of arr) {
        if (! Boolean(element)) {
            res.falsy.push(element)
        }
    }
    return res;
}



console.log(evaluateTruthiness([0, 1, "", "hello", null, undefined, false, true, [], {}]));
// Output: { truthy: [1, "hello", true, [], {}], falsy: [0, "", null, undefined, false] }