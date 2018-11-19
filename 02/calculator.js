var calculate = function(operation) {
    return function(a1) {
        return function (a2) {
            switch (operation) {
                case "+":
                    return a1+a2;
                case "-":
                    return a1-a2;
                case "/":
                    return a1/a2;
                case "*":
                    return a1*a2;
            }
        }
    };
};