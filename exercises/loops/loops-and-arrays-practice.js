// Loops and Arrays Practice

// #1
// Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let count = 0;
for(let i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        count++
    }
}
console.log(count)


// #2
// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var MMFRFans = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 

for(let i = 0; i < MMFRFans.length; i++){
    console.log(MMFRFans[i].age > 17 ? `is old enough` : `is not old enough`)
}
// Optional bonus challenges for this problem
// #1

// Log to the console a personalized message like:

// Mike is not old enough to see Mad Max

// or

// Madeline is old enough to see Mad Max.

for(let i = 0; i < MMFRFans.length; i++){
    console.log(MMFRFans[i].age > 17 ? `${MMFRFans[i].name} is old enough to see Mad Max.` : `${MMFRFans[i].name} is not old enough`)
}
console.log(MMFRFans[i].name + " is old enough to see mad max")


// #2

// Check to see if the movie goer is a male or female for an even more personalized message.

// Mike is not old enough to see Mad Max Fury Road, don't let HIM in.

// or

// Madeline is old enough. SHE'S good to see Mad Max Fury Road.

for(let i = 0; i < MMFRFans.length; i++){
    if(MMFRFans.age > 17){
        console.log(MMFRFans[i].gender === "female" ? `${MMFRFans[i].name} is old enough. She's can watch Mad Max` : `${MMFRFans[i].name} is old enough. He can watch Mad Max`)
    } else {
        console.log(MMFRFans[i].gender === "female" ? `${MMFRFans[i].name} isn't old enough. She's can't watch Mad Max` : `${MMFRFans[i].name} isn't old enough. He can't watch Mad Max`)
    }
}

// Optional Bonus challenge
// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.

// Sample Arrays:

var num =[2, 5, 435, 4, 3] // "The light is on"
var num1 = [1, 1, 1, 1, 3]   // "The light is on"
var num2 = [9, 3, 4, 2]      // "The light is off"

let light = false;
for(let i = 0; i < num1.length; i++){
    if(num[i] % 2 === 1 ){
        light = !light
    } else {
        light
    }
}
console.log(light ? "The light is on" : "The light is off")

//this works too:
// let myNum = num2.reduce((ttl, acc) => ttl + acc)
// if(myNum % 2 === 1){
//     console.log("The light is on")
// } else {
//     console.log("Light is off")
// }
// console.log(myNum)