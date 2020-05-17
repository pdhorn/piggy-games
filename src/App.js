import React from "react";
import "./App.css";
import logo from "./logo.svg";

const App = () => {
  return (
    <div>
      <div className="App-header">
      <h2> Piggy Games</h2>
      <img src={logo} alt="piggy-logo" width="30%" />
      <p style={{ marginBottom: "10px" }}> Pick a game: </p>
      <ul style={{ marginTop: 0 }}>
        <li>
          <a href="https://mahjong.piggygames.net" className="App-link">
            Piggy Maghjong
          </a>
        </li>
        <li>more coming soon</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
