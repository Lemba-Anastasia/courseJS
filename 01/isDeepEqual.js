function isDeepEqual(a, b) {
    if(typeof a === "number" && typeof b === "number"){
        return a ===b;
    }
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
                if(a[item]!==a && b[item]!==b ){
                isDeepEqual(a[item],b[item]);
                }
            }
        }
    } else {
        return false;
    }
    return true;

}

var a = {prop1: 1, list: [1, 2, 3], o: {x: 2}};
var b = {prop1: 1, list: [1, 2, 3], o: {x: 2}};
var c = {prop1: 0, list: [1, 2, 3], o: {x: 2}};
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(isDeepEqual(a, b));
//b['prop1'] = 1;
//console.log(isDeepEqual(a, c));
var aa = {
    prop: 1
};
aa.a = aa;
var bb = {
    prop: 1
};
bb.a = bb;
console.log(isDeepEqual(a,b));