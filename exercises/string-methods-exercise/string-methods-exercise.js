// String Methods Exercise
// 28 JANUARY 2019

// Make a function that will return any given string into all caps followed by the same string all lowercase.
function capsAndLower(str){
    return str.toUpperCase() + str.toLowerCase()
}
console.log(capsAndLower("thihihsi"))
console.log(capsAndLower("Hey now"))
console.log(capsAndLower("What happened"))
// capilizeAndLowercase("Hello") // => "HELLOhello"

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
function halfNum(str){
    let half = str.length / 2;
    return Math.floor(half)
}
console.log(halfNum("Hello World"))
// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

// Make a function that uses slice() and the other functions you've written to return the first half of the string
function halfString(str){
    return str.slice(0, halfNum(str))
}
console.log(halfString("Hello World"))
// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
function upperLower(str){
    let firstHalf = halfString(str), lastHalf = str.slice(halfNum(str));
    return firstHalf.toUpperCase() + lastHalf.toLowerCase()
}
console.log(upperLower("Hello World"))
// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

// Optional Code Challenge (This one is a step up in difficulty):

// Make a function that takes any string and capitalizes any character that follows a space.
function capitalizeFirst(str){
    let capWords = [], strArr = str.split(" ") 
    for(let i = 0; i < strArr.length; i++){
        capWords.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
    }
    return capWords.join(" ");
}
console.log( capitalizeFirst("hey friends! practice practice practice!"))
// capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"


/////////// NO WAY A exercise///////////////
// Make a function that takes a string and returns that string with all instances of the letter 'a' removed. Must handle lowercase and uppercase letters.

function removeA(str) {
    let strArr = str.slice().split("");
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === 'a' || strArr[i] === 'A'){
            strArr.splice(i, 1)
        }
    }
    return strArr.join('')
}

console.log(removeA("Aye matey!"))  // displays "ye mtey!"
// Hint: String methods



///////////////// No Duplicates ////////////////////
// 19 MAY 2015 on Programming Principles, Level 2
// Given a string, remove any duplicate letters.

// Example:
// var input = "bookkeeper larry";

// // Output: "bokepr lay"
// Extra Credit:
// Create a function that randomly removes a letter.
// Create a function that scrambles the original string.
// Create a function using regular expressions that remove all vowels.