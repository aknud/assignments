import React from "react"
import FriendList from "./FriendList"

const styles = {
  textAlign: "center"
}
const App = () => {
  return (
    <div style={styles}>
      <h1>Friends with Pets</h1>
      <FriendList />
    </div>
  )
}

export default App