/** @format */

import React from "react";
import "./home.css";
import ReactTypingEffect from "react-typing-effect";

import profilepic from "../assets/profile_photo.jpg";
import Tilt from "react-tilt";

function Home() {
  return (
    <div className="container home">
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 350, width: 350 }}
      >
        <img src={profilepic} className="profilepic" alt="profile"></img>
      </Tilt>

      <h1>Raj Kamal Nehul</h1>
      <ReactTypingEffect
        className="typingeffect"
        text={[
          "I would love to connect with you",
          "A React.js Developer",
          "A JavaScript Developer",
          "A Web Developer",
        ]}
        speed={110}
        eraseDelay={600}
      />

      <div className="hr_line">
        <div className="hr_inner"></div>
      </div>
    </div>
  );
}

export default Home;
