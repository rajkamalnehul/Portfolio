import React from "react";
import NavBar from "../src/components/navbar/navbar.js";
import Home from "../src/components/Home/home.js";
import About from "../src/components/about/about.js";
import Projects from "../src/components/projects/projects.js";
import Contact from "../src/components/contact/contact.js";
import Social from "../src/components/social/social.js";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className="App">
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
      <div className="footer">
        <p>
          Made with <i class="fa fa-heart"></i> and{" "}
          <i class="fa fa-coffee">...</i>
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;
