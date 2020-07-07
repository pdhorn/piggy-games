import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";

const Home = () => {
  return (
    <div className="App-body">
      <img src={logo} alt="piggy-logo" width="70%" />
      <p style={{ marginBottom: "10px" }}> Pick a game: </p>
      <ul style={{ marginTop: 0 }}>
        <li>
          <a href="https://mahjong.piggygames.net" className="App-link">
            Piggy Mahjong
          </a>
        </li>
        <li>
          <a href="https://circles.piggygames.net" className="App-link">
            Plop Circles
          </a>
        </li>
        <li>
          <a href="https://apollo.piggygames.net" className="App-link">
            Apollo's Gasket
          </a>
        </li>
        <li>more coming soon</li>
      </ul>
      <Link className="App-link" to="/about">
        About me
      </Link>
    </div>
  );
};

export default Home;
