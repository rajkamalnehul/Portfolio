/** @format */

import React from "react";
import NavBar from "../src/components/navbar/navbar.js";
import Home from "../src/components/Home/home.js";
import About from "../src/components/about/about.js";
import Projects from "../src/components/projects/projects.js";
import Contact from "../src/components/contact/contact.js";
import Social from "../src/components/social/social.js";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";

const particleOptions = {
  /* particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },*/
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    size: {
      value: 10,
      random: true,
    },
    color: {
      value: "#76a5e8",
    },
    move: {
      enable: true,
      speed: 10,
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
    },
    repulse: {
      distance: 10,
      duration: 0.1,
    },
  },
};

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Particles params={particleOptions} className="particles" />
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
        <Social />
      </div>
    </React.Fragment>
  );
}

export default App;
