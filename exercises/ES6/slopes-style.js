// ES6 Practice - Slope Style
// 04 NOVEMBER 2017
// Each problem is marked using Ski Slope difficulty ratings. Become a double black diamond ES6 writer!

// Rest and Spread Operator

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {  
    return animals
}

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
//["dog", "cat", "mouse", "jackolope", "platypus"]


// Write a function that returns a food object with the array names as properties using Object Literals:


function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"]))

// Use destructuring to fill in the blanks and use the property names as variables:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}
// Use destructuring to make this code ES6:

function returnFirst([firstItem]){
    return firstItem
}
// console.log(returnFirst(['1','2', 'three']))


// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites([firstFav, secondFav, thirdFav]){
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

// console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(arr1, arr2, arr3) {  
    return [...arr1, ...arr2, ...arr3]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// // ["dog", "cat", "mouse", "jackolope", "platypus"]


// Try to make the following function more ES6xy:

const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1)


// console.log(product(1,2,3,4,5))

// Make the following function more ES6xy. Use at least both the rest and spread operators:

function unshift(array, ...rest) {  
  return rest.concat(array);
}

// console.log(unshift([1,2,3],5,6,7))

// Write some destructuring code to help this function out. Use object literals to simplify it:

const populatePeople = (names) => {
    return names.map(name => name.split(" ")).map(([firstName, lastName]) => ({firstName, lastName}))
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

// [
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
// ]
