import React from "react"
import Friend from "./Friend"

const friends = [
    {
      name: "Ben",
      age: 29,
      pets: [
        {
          name: "Spot",
          breed: "tabby"
        },{
          name: "John Johnson",
          breed: "husky"
        },{
          name: "Bear the bear",
          breed: "grizzly"
        }
      ]
    },{
      name: "Bob",
      age: 31,
      pets: [
        {
          name: "Sally",
          breed: "australian shepard"
        }
      ]
    },{
      name: "Marcus",
      age: 25,
      pets: [
        {
          name: "Indy",
          breed: "akita"
        },{
          name: "Anna",
          breed: "persian cat"
        }
      ]
    },{
      name: "Jacob",
      age: 20,
      pets: [
        {
          name: "Fluffy",
          breed: "sphynx cat"
        },{
          name: "Patches",
          breed: "sphynx cat"
        },{
          name: "Tiger",
          breed: "sphynx cat"
        },{
          name: "Oscar",
          breed: "sphynx cat"
        }
      ]
    }
  ]

const FriendList = () => {
    let mappedFriends = friends.map((friend, i) => {
        return (
            <Friend name={friend.name}
                    age={friend.age}
                    pets={friend.pets}
                    key={i + Math.random()}
                    
            />
        )
    })

    return (
        <div>{mappedFriends}</div>
    )
}

export default FriendList