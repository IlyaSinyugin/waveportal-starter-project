import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hellooo!
        </div>

        <div className="bio">
        I am Ilya. Wave at me!
        </div>
        <button className="waveButton" onClick={wave}>
          Wave
        </button>
      </div>
    </div>
  );
}
