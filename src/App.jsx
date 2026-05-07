// 1. Create an input field where a user enters their name. 
// Display the entered name in real time below the input field as the user types.
// 2. Create a react application demonstrating the use of the context API:
// requirements:
// - Create a context
// -provide data from the parent component
// -consume the data in a nested child component





import React from 'react'
import {useState} from 'react'
import "./App.css"
function App(){
  return(
    <>
      <h1>Enter your name:</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      
      <p>Your name is: {name}</p>
    </>
  )

}
