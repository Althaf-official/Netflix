import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {originals,action, comedy,trending, romance, documenteries} from './urls'
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
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={trending} title='trending' isSmall />
      <RowPost url={comedy} title='comedy' isSmall />
      <RowPost url={documenteries} title='Documenteries' isSmall />
    </div>
  );
}

export default App;
