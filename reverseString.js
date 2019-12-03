/*
Write a function that takes an array of characters and reverses the letters in place. ↴
*/

const string = "hello";

const reverseString = (str) => {
    let reversed = "";
    for(let i = 0; i < str.length; i++){
        reversed = str[i] + reversed;
    }
    return reversed;
}

console.log(reverseString(string))