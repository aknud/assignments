// Preliminaries

// Write an if statement that prints "is greater than" if 5 is greater than 3
if(5 > 3){
    console.log("is greater than")
}
// Write an if statement that prints "is the length" if the length of "cat" is 3
if("cat".length === 3){
    console.log("is the length")
}
// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
if("cat" === "dog"){
    console.log("They are the same.")
} else {
    console.log("not the same")
}

// Silver Medal

// Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.
var person = {
  name: "Bobby",
  age: 12
}

if(person.age >= 18){
    console.log(`${person.name} is allowed to go to the movie.`)
} else {
    console.log(`${person.name} is NOT allowed to go to the movie.`)
}
// Using that same object, only allow them into the movie if their name starts with "B"
if(person.name[0] === "B"){
    console.log(`${person.name} is allowed to go to the movie because their name starts with B`)
} else {
    console.log(`${person.name} isn't allowed because their name doesn't start with B`)
}
// Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
if(person.name[0] === "B" && person.age >= 18){
    console.log(`${person.name} is good to go.`)
} else {
    console.log(`${person.name} is too young`)
}

// Silver Medal

// Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
if(1 === "1"){
    console.log("strict")
} else if(1 == "1"){
    console.log("abstract")
} else {
    console.log("not equal at all")
}
// Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4
// OR!!!
// 3 * 4 is greater than 10 and 5 plus 10 is greater than 10.
if((1 <= 2 && 2 === 4) || (3 * 4 > 10 && 5 + 10)){
    console.log("yes")
} else {
    console.log("no")
}


// Gold Medal
// Gold may take some googling!

// Write an if statement that checks to see if "dog" is a string
console.log(typeof "dog" === "string" ? true : false)

// Write an if statement that checks to see if "true" is a boolean
console.log(typeof true === "boolean" ? true : false)
// Write an if statement that checks to see if a variable has been defined or not
var someVariable = false;
console.log(someVariable ? true : false)
// Write an if statement comparing letters to numbers using < and >. Try to figure out what letters are going to be "greater than" other numbers or letters. For example: is "s" greater than 12?
const letter = "s", num = 12;
console.log( letter > num ? true : false )
// Write a ternary statement that console.logs whether a number is odd or even. For example:
var myNum = 10;
// // Write your ternary here to log if `myNum` is odd or even.
console.log( myNum % 2 === 0 ? "even" : "odd" )
// (It should continue to work correctly even if myNum changes to a different number).