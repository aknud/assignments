var ask = require("readline-sync");
let response2, response3;
const options = ["Put hand in hole", "Find the key", "Open the door"];
const options2 = ["Wait, but what is this hole though??", "This place is super scary. Unlock the door.", "Ratch around for some interesting cannibal treasure."];
const options3 = ["You start screaming for help in desparation.", "You keep looking for a key.", "You try knocking politely on the door.", "That hole might have something in it. You put your hand in it."] 
let response = ask.keyInSelect(options, "Actual cannibal Shia Lebouf has you locked in a room. The door is locked and there is a hand-sized hole in the wall. \n These are your options. Choose one. Choose wisely...")



if(response === 0 || response2 === 0){
    console.clear()
    console.log("\nAhhhh your hand! It's caught in a bear trap. Shia hears your scream. He comes in to eat you. You are dead.")
} else if (response === 1){
    console.clear()
    response2 = ask.keyInSelect(options2, "\nYou find the key, [Quiet, quiet] \nChoose your next action.")
    if(response2 === 1){
        console.clear()
        console.log("\nThe key works! There's an axe near the door. You pick it up and creep up behind Shia. He hears you and as he turns you chop off his head. You are finally free from Shia Lebouf.")
    } else if(response2 === 2){
        console.clear()
        console.log("\nShia hears you ratching. He comes in and eats you. You are dead.")
    }
} else if(response === 2){
    console.clear()
    response3 = ask.keyInSelect(options3, "\nDoor is locked and you hear Shia stirring. Be careful.\nChoose your next step, QUICKLY!")
    if(response3 === 1){
        console.clear()
        console.log("\nThe key works! There's an axe near the door. You pick it up and creep up behind Shia. He hears you and as he turns you chop off his head. You are finally free from Shia Lebouf.")
    }
}
 
if(response2 === 0 || response3 === 3 || response3 === 0 || response3 === 2){
    console.clear()
    console.log("\nAhhhh your hand! It's caught in a bear trap. Shia hears your scream. He comes in to eat you. You are dead.")
}

