import React from "react"
import Box from "./Box"

const boxInfo = [
    {
        title: "Zebra",
        subtitle: "Horse of the Safari",
        information: "This is a detailed summary about Zebras",
        color: "#10f6d6"
    },
    {
        title: "Zebra",
        subtitle: "Horse of the Safari",
        information: "This is a detailed summary about Zebras",
        color: "#630a8c"
    },
    {
        title: "Zebra",
        subtitle: "Horse of the Safari",
        information: "This is a detailed summary about Zebras",
        color: "#f71a6b"
    },
    {
        title: "Zebra",
        subtitle: "Horse of the Safari",
        information: "This is a detailed summary about Zebras",
        color: "#6c3e99"
    },
    {
        title: "Zebra",
        subtitle: "Horse of the Safari",
        information: "This is a detailed summary about Zebras",
        color: "#99dc69"
    },
    {
        title: "Zebra",
        subtitle: "Horse of the Safari",
        information: "This is a detailed summary about Zebras",
        color: "#3fec1f"
    },
    {
        title: "Zebra",
        subtitle: "Horse of the Safari",
        information: "This is a detailed summary about Zebras",
        color: "#6f0434"
    },
    {
        title: "Zebra",
        subtitle: "Horse of the Safari",
        information: "This is a detailed summary about Zebras",
        color: "#fd1f55"
    },
    {
        title: "Zebra",
        subtitle: "Horse of the Safari",
        information: "This is a detailed summary about Zebras",
        color: "#09bc30"
    },
    {
        title: "Zebra",
        subtitle: "Horse of the Safari",
        information: "This is a detailed summary about Zebras",
        color: "#fa43c2"
    },
    
    
]
let animals = boxInfo.map(animal => {
    return (
        <Box 
            title={animal.title}
            subtitle={animal.subtitle}
            information={animal.information}
            color={animal.color}
            key={animal.color}
        />
    )
})
const App = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Colored Info Boxes</h1>
            {animals}
        </div>
    )
}

export default App