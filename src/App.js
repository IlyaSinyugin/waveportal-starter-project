import * as React from "react";
import { ethers } from "ethers";
import './App.css';

const App = () => {
  const checkIfWalletIsConnected = () => {
    /*
    * Check if we have acce to window.ethereum
    */
   const {ethereum} = window;

   if (!ethereum) {
     console.log("Make sure you have Metamask!");
   } else {
     console.log("We have the Ethereum object", ethereum);
   }
  }
  
  React.useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  
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

export default App