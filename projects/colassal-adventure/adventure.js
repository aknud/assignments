var ask = require("readline-sync");
let playerHealth = 100;
let inventory = {
    weapon: "stick"
}
const actions = ["walk", "check inventory"]

let name = ask.question("Does the stranger have a name?")
console.log(`Welcome ${name}. We have a quest for you.`);

while(playerHealth){
   let action = ask.keyInSelect(actions, "What is your first action?")
   if(action === 0){
        return walk()
   } else if( action === 1){
       return checkInventory()
   }
}

function walk(){
    //did they run into a monster?
    if((Math.random()) > .5){
        console.log("You encounter a Monster!")
        return getAttacked()
    } else {
        console.log("You're walking")
        ask.keyInSelect()
    }
}

function checkInventory(){
    // display inventory and health
    console.log( inventory, playerHealth)
}

function getAttacked(){
    //fight sequence
}

// You can use constructor functions to create monsters 
