import React from "react"
import Vacation from "./Vacation"
import "./App.css"

const pics = ["https://i.ytimg.com/vi/dK6EYTFq-hE/maxresdefault.jpg","http://inboxpros.com/wp-content/uploads/2016/06/summer.jpg","https://images.unsplash.com/photo-1516700675895-b2e35cae333c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "http://images4.fanpop.com/image/photos/23800000/Winter-card-winter-23830471-1920-1920.jpg"]
let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  }, {
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  }, {
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  }, {
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  }, {
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]

const places = vacationSpots.map((location, i) => {
  let dollars;
  var backgroundImage;
  if(location.price < 500){
    dollars = "$"
  } else if(location.price < 1000){
    dollars = "$$"
  } else {
    dollars = "$$$"
  }
  if(location.timeToGo === "Spring"){
    backgroundImage = `url(${pics[0]}`
  } else if (location.timeToGo === "Summer"){
    backgroundImage = `url(${pics[1]}`
  } else if (location.timeToGo === "Fall"){
    backgroundImage = `url(${pics[2]}`
  } else {
    backgroundImage = `url(${pics[3]}`
  }
  // console.log(styles)
  return (
    <Vacation key={i + location.place}
      pic={backgroundImage}     
      place={location.place}
      price={location.price}
      dollars={dollars}
      timeToGo={location.timeToGo}
    />
  )
})

const App = () => {
  return (
    <div>{places}</div>
  )
}
export default App
