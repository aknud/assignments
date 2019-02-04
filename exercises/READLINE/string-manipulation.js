var ask = require("readline-sync");

let firstName = ask.question("Hi I'm Amy. What's your first name? ")
let lastName = ask.question("...and your last name? ")
console.log("Nice to meet you " + firstName + " " + lastName + ".")
let age = ask.questionInt("I'm 30 years old. How old are you? \n")
if(age > 30){
    let older = age - 30;
    console.log(`Cool! You're ${older} my senior!`)
} else {
    let difference = 30 - age;
    console.log(`Cool! We're ${difference} years apart.`)
}
let color = ask.question("My favorite color is blue. What's your favorite color? ");

let response = ask.question("Tell me about yourself. Give me the long version, more than ten words. \n -I'll return the last half of what you said. \n" )
console.log("This is half of what you said: \n", response.slice(response.length / 2))
let number = ask.questionInt(`Want me to start from somewhere else? Enter a number that is less than ${Math.floor(response.length /2)}. `)
console.log("Here it is! ", response.slice(number))

// //#1
// console.log(1, `Hi ${firstName.toUpperCase()}!`)

// //#2
// console.log(2, lastName.length)

// // #3
// console.log(3, firstName.concat(lastName))
// //better way
// // console.log(3, `${firstName} ${lastName}`)

// //#4
// console.log(4, response.slice(response.length / 2))


