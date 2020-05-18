import React from "react";
import {Link} from "react-router-dom";
import "./App.css";
import headshot from "./peter.jpg";

const About = () => {
  return (
    <div className="App-body">
        <img src={headshot} alt="peter" />
      <p>I'm Peter Horn, and I created piggygames.net to bring together two of my passions: games and coding.
      I spend more time playing the games than I do writing the code.  Find me on <a style={{color: '#61dafb'}} href="https://www.linkedin.com/in/peter-horn-79b132105/">LinkedIn</a>.
      </p>
      <Link className="App-link" to="/">home</Link>
    </div>
  );
};

export default About;
