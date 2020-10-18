import React from "react";
import "./navbar.css";
import Buttons from "../buttons/buttons.js";
import profile_pic from "../assets/profile_pic.png";

function NavBar() {
  return (
    <div className="Nav">
      <div>
        <div className="neu2">
          <div className="neu1">
            <img className="profile_pic" src={profile_pic}></img>
          </div>
        </div>

        <h2>Raj Kamal Nehul</h2>
        <span>React.js Developer</span>
      </div>

      <Buttons />
    </div>
  );
}

export default NavBar;
