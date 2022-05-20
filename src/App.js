import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {originals,action} from './urls'
//TODO:3 i want remove the default padding and margin. so i created one App.css file and import into App.js
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
      
    </div>
  );
}

export default App;
