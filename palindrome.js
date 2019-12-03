/*
Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
*/

const string = "civic"
const string2 = "ivicc"

function palindrome(str) {
    const reversed = str
    .split('')
   .reverse()
    .join('');

 return str === reversed;
}

console.log(palindrome(string))