import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./App.css";

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  // Store user's public wallet
  const checkIfWalletIsConnected = async () => {
    try {
      /*
       * Check if we have acce to window.ethereum
       */
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have Metamask!");
      } else {
        console.log("We have the Ethereum object", ethereum);
      }

      // Check if we can access user's wallet
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // connectWallet method
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">👋 Hellooo!</div>

        <div className="bio">I am Ilya. Wave at me!</div>
        <button className="waveButton" onClick={null}>
          Wave
        </button>
        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};
export default App;
