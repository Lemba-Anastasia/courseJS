function isDeepEqual(a, b) {
    if(typeof a === "number" && typeof b === "number"){
        if(isNaN(a) && isNaN(b))return true;
        return a ===b;
    }
    var arrKeysA = Object.keys(a);
    var arrKeysB = Object.keys(b);
    var item= 0;
    if (isArrKeysEqual()) {
        for(var i=0;i<arrKeysA.length;i++){
            item=arrKeysA[i];
            if (typeof a[item] === "number" || typeof a[item] === "boolean" ) {
                if(isNaN(a[item]) && isNaN(b[item])){
                   continue;
                }
                if (!(a[item] === b[item])) {
                    return false;
                }
            }
            if(typeof a[item] === "string"){
                if (!(a[item] === b[item])) {
                    return false;
                }
            }
            if (typeof a[item] === "object") {
                if(a[item]!==a && b[item]!==b ){
                    isDeepEqual(a[item],b[item]);
                }
            }
        }
    } else {
        return false;
    }
    return true;

    function isArrKeysEqual() {
        for(prop in arrKeysA){
            if (a.hasOwnProperty(prop) !== a.hasOwnProperty(prop)) {
                return false;
            }
        }
        for(prop in arrKeysB){
            if (a.hasOwnProperty(prop) !== b.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    }
}

var a = {prop1: 1, list: [1, 2, 3], o: {x: 2}};
var b = { list: [1, 2, 3], o: {x: 2}};
var c = {prop1: 0, list: [1, 2, 3], o: {x: 2}};
b.prop1=1;
let aa = { NaN: NaN };
let bb = { NaN: NaN };
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(isDeepEqual(a, b));
//b['prop1'] = 1;
//console.log(isDeepEqual(a, c));
console.log(isDeepEqual("мама","папа"));