// Loops & Arrays
// 13 JULY 2015 on JavaScript, Warmup, Programming Principles, Problem Solving, Level 2

// Create a function called createEvenArray. It will have 1 parameter called highestNum where you will pass in the highest number that you want to create even numbers up to. Create a for loop inside that function that pushes all even numbers up to that highest number to that array. The function should return that array. Do not include the number 0
function createEvenArray(highestNum){
    var thatArray = []
    for(let i = 1; i <= highestNum; i++){
        if(i % 2 === 0){
            thatArray.push(i)
        }
    }
    return thatArray
}
console.log("createEvenArray function: ",createEvenArray(10))

// Create a second function called addOdds that takes 1 parameter of type Array, call it evensOnlyArray. This function will iterate through that array (we are assuming that the array is all evens), examine each number, and then add the next odd number at the end of the array.

function addOdds(evensOnlyArray){
    let addOddsArr = evensOnlyArray.slice();
    if(addOddsArr[0] === 2){
        addOddsArr.unshift(1)
    }
    for(let i = 0; i < evensOnlyArray.length; i++){
        addOddsArr.push(evensOnlyArray[i] + 1)
    }
    return addOddsArr
}
console.log("addOdds function: ", addOdds(createEvenArray(10)))

// So for instance, if I called createEvenArray and passed in 10 into the parameter highestNum, it would return an array to me that looks like this:

// [2, 4, 6, 8, 10]

// If I pass this array into addOdds function, the addOdds function would return:

// [2, 4, 6, 8, 10, 3, 5, 7, 9, 11]

// The next part is to use this sorting function to sort the entire array from smallest to largest:

function sortNums(numberArray) {
    return numberArray.sort(function(a, b){return a-b});
}
console.log("sortNums function: ",sortNums([2, 4, 6, 8, 10, 3, 5, 7, 9, 11]))
// Print the final sorted list to the console. In our example it would look like:

// [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// Summary:

// The first function creates an array of even numbers
// The second array adds the missing odd numbers to the end of the array
// The third function (sortNums) sorts that array
// Extra Credit
// Have the addOdds function support adding the number 1 into the array if the evens array starts at 2

