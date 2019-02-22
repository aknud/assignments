import React from "react"

const Pet = (props) => {
    let mappedPets = props.pets.map((pet,i) => {
        return (
            <div key={i + pet.name}>
                <h4>Name: {pet.name}</h4>
                <p>Breed: {pet.breed}</p>
            </div>
        )
    })
    return (
        <div>{mappedPets}</div>
    )
}

export default Pet