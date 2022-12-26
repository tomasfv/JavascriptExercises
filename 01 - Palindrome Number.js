//Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    let str = x.toString().split('').reverse().join('')

    if(x === parseInt(str)){
        return true
    }

    return false
};