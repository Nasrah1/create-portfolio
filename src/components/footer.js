import React, { Component } from "react";
import "../App.css"

class Footer extends Component{
    render() {
        return(
            <div>
            <div className="py-2 text-center footer-style">© Nasra Hassan; {new Date().getFullYear()}</div>
          </div>  
    )
}
    }

export default Footer;