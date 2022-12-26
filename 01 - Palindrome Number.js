//Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    let str = x.toString().split('').reverse().join('')

    if(x === parseInt(str)){
        return true
    }

    return false
};

console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); //false