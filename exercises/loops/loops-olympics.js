// // Preliminaries
// // Write a for loop that prints to the console the numbers 0 through 9.
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// // Write a for loop that prints to the console 9 through 0.
// for(let i = 9; i >= 0; i--){
//     console.log(i)
// }
// // Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for(let i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }


// // Bronze Medal
// // Write a for loop that will push the numbers 0 through 9 to an array.
// let pushArr = []
// for(let i = 0; i <= 9; i++){
//     pushArr.push(i)
// }
// // Write a for loop that prints to the console only even numbers 0 through 100.
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }
// // Write a for loop that will push every other fruit to an array.
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for(let i = 0; i < fruit.length; i+=2){
//     pushArr.push(fruit[i])
// }

// Silver Medal
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]


// // Write a loop that will print out all the names of the people of the people array
// for(let i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)
// }
// // Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// let names = [], occupations = [];
// for(let i = 0; i < peopleArray.length; i++){
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
// }
// // Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
// let everyOtherName = [], everyOtherOccupation = [];
// for(let i = 0; i < peopleArray.length; i+=2){
//     everyOtherName.push(peopleArray[i].name)
//     everyOtherOccupation.push(peopleArray[i].occupation)
// }



// Gold Medal - Nesting
// Create an array that mimics a grid like the following using nested for loops:

let grid = []
for(let i = 0; i < 3; i++){
  grid.push([0,0,0])
}
console.log("grid: ", grid)

// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]
// 2.Create an array that mimics a grid like the following using nested for loops:
let grid2 = []
for(let i = 0; i < 3; i++){
  grid2.push([i,i,i])
}
console.log("grid2: ", grid2)
// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]
// 3.Create an array that mimics a grid like the following using nested for loops:
let grid3 = []
for(let i = 0; i < 3; i++){
  grid3.push([0,1,2])
  //do another for loop
}
console.log("original grid3: ", grid3)
// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]

//Bonus: Given a grid like the previous ones, write a nested for loop that would change every number to an x.
// var grid = [[x, ...], 
//             [x, ...], 
//             [x,...], ...] 

function changeGrid (grid){
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      grid[i][j] = 0;
    }
  }
}
changeGrid(grid3)
console.log("modified grid3: ", grid3)
console.table(grid3)