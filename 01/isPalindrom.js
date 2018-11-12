function isPalindrome(text) {
    var a1 = text.replace(/\s+/g, '');
    var a2 = myReverse(a1);
    return a1 === a2;
}

function myReverse(string) {
    var re = /,/gi;
    var reverseString = new Array(string.length);
    var j=0;
    for (var i = string.length - 1; i >= 0; i--) {
        reverseString[j] = string[i];
        j++;
    }
    return reverseString.toString().replace(re,'');
}

console.log(isPalindrome("каролина"));
console.log(isPalindrome("иди"));
console.log(isPalindrome("ролор"));
