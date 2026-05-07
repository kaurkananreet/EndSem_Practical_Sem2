
import React from 'react'
import {useState} from 'react'
import "./App.css"
function App(){
  const [name, setName] = useState("")
  return(
    <>
      <h1>Enter your name:</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Your name is: {name}</p>
    </>
  )

}

export default App

