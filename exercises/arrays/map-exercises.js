// Array Map Exercises
// 27 SEPTEMBER 2017
// Use the built-in .map() method on arrays to solve all of these problems



function doubleNumbers(arr){
    let doubled = arr.map(num => {
        return num * 2
    })
    return doubled
 }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


function stringItUp(arr){
    let str =  arr.map(num => {
        return num + ''
    })
    return str
}

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names
function capitalizeNames(arr){
    let capitalized = arr.map((name) => {
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
    })
    return capitalized
}

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


/*--------------------------------------------------*/
// 4) Make an array of strings of the names
function namesOnly(arr){
    let namesArr = []
    let names = arr.map(person => {
        return namesArr.push(person.name)
    })
    return namesArr
}

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) )


// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];




/*-------------------------------------------------*/

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    return arr.map(person => {
        if(person.age > 17){
            return `${person.name} is old enough to go to the Matrix!`
        }
        else {
            return `${person.name} is under age.`
        }
    })
}

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])) 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]



/*-------------------------------------*/

function readyToPutInTheDOM(arr){
    return arr.map(person => {
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`
    })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) )
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]


