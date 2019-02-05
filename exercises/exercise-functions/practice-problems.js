// Practice Problems
// 02 JANUARY 2018
// Introduction
// Now that you have a basic understanding of the building blocks that make up JavaScript you are going to use them in problem-solving.

// Make a function that takes a string and returns that string reversed.
// Example

// Input: "Hello World"
// Output: "dlroW olleH"

let reverseStr = function(str) {
    return str.split('').reverse().join('')
}
// console.log(reverseStr('Hello World'))

// Make a function that takes a string and returns true if the string could be a number else return false.
// Example

// Input: "3"
// Output: true

// Input: "three"
// Output: false

let isNum = function(str) {
    return str == +str ? true : false
}
// console.log(isNum("4"))

// Make a function that takes a number and returns true if the number is even else return false.
// Example

// Input: 4
// Output: true

// Input: 3
// Output: false

let isEven = function(num) {
    return num % 2 === 0 ? true : false
}
// console.log(isEven(3))

// Make a function that takes an array and returns the average of the array.
// Example

// Input: [1, 2, 3]
// Output: 2

// Input: [5, -10, 10, 20]
// Output: 6.25

let averageArray = function(arr) {
    let total = arr.reduce((acc, curr) => acc + curr)
    return total / arr.length
}
// console.log(averageArray([1, 2, 3]))
// console.log(averageArray([5, -10, 10, 20]))

// Make a function that takes two arrays and returns a single array of the items from the arrays added alternatingly.
// Example

// Input: ["a", "b", "c"] and [1, 2, 3]
// Output: ["a", 1, "b", 2, "c", 3]


let combineArrays = function(arr1, arr2) {
    let combined = [];
    for(let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++){
        combined.push(arr1[i], arr2[j])
    }
    return combined
}
// console.log(combineArrays(["a", "b", "c"], [1, 2, 3]))
