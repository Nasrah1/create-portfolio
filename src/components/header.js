import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Header extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>  <img src="me.png" alt="nasra"
                    className="headshot-img"/>

                    <div className="banner-text">
                        <h1>Hi, I'm Nasra Hassan.</h1>
                        <h2> Full Stack Web Developer</h2>
                        <hr/>
                    </div>
                    <div className = "social-links">

                        { /* Github */}
                        <a href="https://github.com/Nasrah1" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                        </a>

                        { /* email */}
                        <a href="mailto:nasra_09@yahoo.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-envelope-square"  aria-hidden="true" />
                        </a>

                        { /* linkedin */}
                        <a href="https://www.linkedin.com/in/nasra-hassan-6383981a9/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>

                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Header;