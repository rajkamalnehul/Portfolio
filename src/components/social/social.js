/** @format */

import React from "react";
import "./social.css";

function Social() {
  return (
    <div className="social">
      <div className="social-btn">
        <a href="https://www.linkedin.com/in/rajkamalnehul" target="_blank">
          <i class="fa fa-linkedin"></i>
        </a>
      </div>

      <div className="social-btn">
        <a href="https://github.com/rajkamalnehul" target="_blank">
          <i class="fa fa-github"></i>{" "}
        </a>
      </div>

      <div className="social-btn">
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
      </div>

      <div className="social-btn">
        <a
          href="https://www.freecodecamp.org/fcc0aa55e31-df96-4260-9363-89c9317d8275"
          target="_blank"
        >
          <i class="fa fa-free-code-camp"></i>
        </a>
      </div>
    </div>
  );
}

export default Social;
