/** @format */

import React from "react";
import "./about.css";

function About() {
  return (
    <div className="container edCon">
      <div className="about">
        <h1>About Me</h1>
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <h2> Raj Kamal Nehul</h2>
        <p className="aboutDes">
          I am a self taught web developer with strong eye for innovative design
          and a keen understanding of techniques. I have keen interest in web
          development and building interactive UI and currently looking for jobs
          to apply my knowledge and skills. As a qualified Software Engineer, I
          am adept in web development and web design and beleve that will prove
          to be an asset for the company. I like learning from all the resources
          available on the internet and apply those learnig by building
          projects.
        </p>
      </div>
      <div className="educationCon">
        <div className="education">
          <h3>
            {" "}
            <i className="fa fa-book i1 i3"></i> Education{" "}
          </h3>
          <div className="edu">
            <div className="vr_line">
              <div className="vr_inner inn1"></div>
              <div className="vr_inner inn2"></div>
              <div className="vr_inner inn3"></div>
            </div>
            <div className="edu-content">
              <h4>B.E in CSE</h4>
              <p>IPS CTM, Gwalior</p>
              <p>
                <i class="fa fa-calendar i2"></i> 2016 - 2020
              </p>
              <h4>Senior Secondary</h4>
              <p>S.K.P Vidya Vihar</p>
              <p>
                <i class="fa fa-calendar i2"></i>May 2016
              </p>
              <h4>Secondary School</h4>
              <p>Kendriya Viddlaya Chittaranjan</p>
              <p>
                <i class="fa fa-calendar i2"></i>May 2013
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <p className="sk">HTML 5</p>
          <p className="sk">CSS 3</p>
          <p className="sk">JavaScript</p>
          <p className="sk">React.js</p>
          <p className="sk">Bootstrap</p>
          <p className="sk">Redux</p>
          <p className="sk">Context Api</p>
          <p className="sk">Material UI</p>
          <p className="sk">Firebase</p>
        </div>
      </div>
    </div>
  );
}

export default About;
