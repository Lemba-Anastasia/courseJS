function fizzBuzzWithIf() {
    for (var i = 1; i <= 50; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

function matrixArray(rows, columns) {
    var arr = new Array(rows);
    for (var i = 1; i <= rows; i++) {
        arr[i] = new Array(columns);
        for (var j = 1; j <= columns; j++) {
            arr[i][j] = i;
        }
    }
    return arr;
}

function fizzBuzzWithoutIf() {
    var arr = matrixArray(100, 1);
    arr.forEach(function (item, i, arr) {
        var arr15=item.filter(function (number) {
            return number % 15 === 0;
        });
        arr15.forEach(function (item3, i3) {
            console.log("FizzBuzz");
        });
        var arr5=item.filter(function (number) {
            return number % 5 === 0;
        });
        arr5.forEach(function (item3, i3) {
            console.log("Buzz");
        });
        var arr3=item.filter(function (number) {
            return number % 3 === 0;
        });
        arr3.forEach(function (item3, i3) {
            console.log("Fizz");
        });
        var justArr=item.filter(function (number) {
            return !number % 15 === 0 &&!number % 3 === 0 &&!number % 5 === 0;
        });
        justArr.forEach(function (item3, i3) {
            console.log(item3);
        });
    });
}

fizzBuzzWithoutIf();