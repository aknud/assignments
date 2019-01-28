// Social.js
// 03 MAY 2016 on Exercise
// Create a model to represent the database of a new social media platform you're creating. It can be about whatever you want, but it needs the following:

// At least 3 nested levels of data (including objects and arrays)
// At least 1 method
// Span across at least 50 lines of code. (No empty lines)
// Example:

var amyInfo = {
    name: "Amy",
    age: 30,
    hobbies: ["eating", "hiking", "coding", "biking"],
    listHobbies: function(){
        this.hobbies.forEach(hobby => {
            console.log(hobby)
        })
    },
    siblings: [
        {
            name: "Jonathan",
            age: 36,
            friends: [
                {
                    name: "Leslie",
                    age: 36
                },
            ]
        },
        {
            name: "Daniel",
            age: 34,
            friends: [
                {
                    name: "Jacob",
                    age: 32
                }
            ]
        },
        {
            name: "Virginia",
            age: 32,
            friends: [
                {
                    name: "Darlene",
                    age: 29
                },
                {
                    name: "Ashley",
                    age: 32
                }
            ],
            occupation: "Nurse Practitioner"
        },
        {
            name: "Stacie",
            age: 28
        },
        {
            name: "Jessica",
            age: 25
        },
        {
            name: "Wesley",
            age: 22,
            friends: [
                {
                    name: "Dan",
                    age: 23
                }
            ]
        },
        {
            name: "Kyle",
            age: 20
        },
        {
            name: "Steven",
            age: 18
        },
        {
            name: "Jennifer",
            age: 15
        },
        {
            name: "Melissa",
            age: 13
        }
    ]
}
// After you create the base object, you need to:

// Add 2 properties to one of the objects (doesn't matter what level of nested data you do this to)
console.log(amyInfo.siblings[2].significantOther = {name: "Sam", age: 33})
console.log(amyInfo.siblings[2].children = {name: "Siena", age: 0})
// Add 2 items to at least one of the arrays in your data
amyInfo.siblings[1].hobbies = ["video-games", "3D-printing", "racquet-ball"]
console.log(amyInfo.siblings[1].hobbies)
