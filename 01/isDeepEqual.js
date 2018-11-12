function isDeepEqual(a, b) {
    var arrKeysA = Object.keys(a);
    var arrKeysB = Object.keys(b);
    var item= 0;
    if (arrKeysA.toString() === arrKeysB.toString()) {
        for(var i=0;i<arrKeysA.length;i++){
            item=arrKeysA[i];
            if (typeof a[item] == "number" || typeof a[item] == "string" || typeof a[item] == "boolean" ) {
                if (!(a[item] === b[item])) {
                    return false;
                }
            }
            if (typeof a[item] == "object") {
                isDeepEqual(a[item],b[item]);
            }
        }
    } else {
        return false;
    }
    return true;
    //return Object.toJSON(a) === Object.toJSON(b)
    //return JSON.stringify(a) == JSON.stringify(b);
    //  alert(JSON.stringify(a))
}

var a = {prop1: 1, list: [1, 2, 3], o: {x: 2}};
var b = {prop1: 1, list: [1, 2, 3], o: {x: 2}};
var c = {prop1: 0, list: [1, 2, 3], o: {x: 2}};
console.log(a);
console.log(b);
console.log(c);
console.log(isDeepEqual(a, b));
//b['prop1'] = 1;
console.log(isDeepEqual(a, c));