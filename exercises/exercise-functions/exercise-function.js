// Exercise - Functions
// 14 MAY 2015 on Exercise, JavaScript, Programming Principles, Level 2
// Functions are important building blocks in any language. They help ensure that your code follows the DRY principle and that you follow a design principle called Separation of Concerns. Your functions should “do one thing and do it well” (McIlroy). These exercises will help strengthen your function know-how.

// Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2){
    return num1 + num2
}
console.log(sum(1, 2))

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function largest(x,y,z){
    return Math.max(x,y,z)
}
console.log(largest(10, 21, 11))

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function evenOrOdd(num){
    return num % 2 === 0 ? "even" : "odd";
}
console.log(evenOrOdd(3))

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function stringFunc(str){
    if(str.length <= 20){
        return str + str
    } else {
        let half = str.length / 2
        return str.substring(0, half)
    }
}
console.log(stringFunc("supercalifragilisticexpialidocious"))

// Optional Challenge
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// The first numbers are:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// So if n were 6, the sum of 1+1+2+3+5+8 would be 20


//this doesn't work.
function fibNum(n){
    let sum = 0, currNum = 1, arr = [];
    for(let i = 1; i < n; i++){
        arr.push(sum += currNum)
    }
    return sum
}
console.log(fibNum(6))

// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )

function frequent(str){
    let strArr = str.split("");
    let countedLetters = strArr.reduce((allLetters, letter) => {
        if(letter in allLetters){
            allLetters[letter]++
        } else {
            allLetters[letter] = 1
        }
        return allLetters
    },{})
    let most = Math.max(...Object.values(countedLetters))
    let mostOccurances;
    for(let key in countedLetters){
        if(countedLetters[key] === most){
            mostOccurances = key
        }
    }
    return mostOccurances
}
console.log(frequent("billy bob"))