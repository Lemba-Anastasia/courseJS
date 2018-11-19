function quadraticEquation(a, b, c) {
    var resultArr = [];
    var x;
    var D = Math.pow(b, 2) - 4 * a * c;
    if (D >= 0) {
        resultArr.push((-b + Math.sqrt(D)) / 2 * a);
        if (D !== 0) {
            resultArr.push((-b - Math.sqrt(D)) / 2 * a);
        }
    }
    return resultArr;
}