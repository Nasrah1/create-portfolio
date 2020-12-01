import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./header";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import Resume from "./resume";
const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/footer" component={Footer} />
        <Route path="/resume" component={Resume} />
    </Switch>
)
export default Main;