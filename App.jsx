// 1. Create an input field where a user enters their name. 
// Display the entered name in real time below the input field as the user types.



import { useState } from "react";
function App() {
 const [name, setName] = useState("");
 return (
   <div>
     <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
     <h2>{name}</h2>
   </div>
 );
}

export default App;
