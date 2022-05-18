import React from "react";
import NavBar from "./Components/NavBar/NavBar";

//TODO:3 i want remove the default padding and margin. so i created one App.css file and import into App.js
import './App.css'
import Banner from "./Components/Banner/Banner";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      
      
    </div>
  );
}

export default App;
