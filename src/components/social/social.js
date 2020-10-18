import React from "react";
import "./social.css";

function Social() {
  return (
    <div className="social">
      <div className="social-btn">
        <a href="#">
          <i class="fa fa-linkedin"></i>
        </a>
      </div>

      <div className="social-btn">
        <a href="#">
          <i class="fa fa-github"></i>{" "}
        </a>
      </div>

      <div className="social-btn">
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
      </div>

      <div className="social-btn">
        <a href="#">
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default Social;
