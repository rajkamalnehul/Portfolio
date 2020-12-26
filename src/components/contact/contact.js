/** @format */

import React from "react";
import "./contact.css";
import Map from "../google-map/map.js";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import EmailIcon from "@material-ui/icons/Email";
import Tooltip from "@material-ui/core/Tooltip";

const location = {
  address: "Home",
  lat: 23.848986,
  lng: 86.884029,
};

function Contact() {
  return (
    <div className="container">
      <h1>Contact</h1>
      <div className="hr_line">
        <div className="hr_inner"></div>
      </div>
      <Map location={location} zoomLevel={10} />
      <div className="button_container">
        <a
          style={{ textDecoration: "none" }}
          href="https://www.dropbox.com/s/rl388mf65kupxlg/Mr.Raj%20Kamal%20Nehul%28React.js%20Updated%29.pdf?dl=1"
        >
          <Tooltip title="Download Resume">
            <Button variant="contained" startIcon={<CloudDownloadIcon />}>
              Resume
            </Button>
          </Tooltip>
        </a>

        <a
          style={{ textDecoration: "none" }}
          href="mailto:rajkamalnehul@gmail.com"
        >
          <Tooltip title="rajkamalnehul@gmail.com">
            <Button variant="contained" startIcon={<EmailIcon />}>
              EMail
            </Button>
          </Tooltip>
        </a>
      </div>
    </div>
  );
}

export default Contact;
