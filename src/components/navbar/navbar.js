/** @format */

import React from "react";
import "./navbar.css";
import Buttons from "../buttons/buttons.js";
import profile_pic from "../assets/profile_pic.png";
import Tilt from "react-tilt";

function NavBar() {
  return (
    <div className="Nav">
      <div>
        <div className="neu2">
          <div className="neu1">
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 180, width: 180 }}
            >
              <img
                className="profile_pic"
                alt="profile"
                src={profile_pic}
              ></img>
            </Tilt>
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
