import React from "react";
import logo from "../img/logo.svg" 
import "./header.css"
import "../styles/reset.css"

export default props => (
<div className="wrapper-header">
   <img className="img-logo" src={logo} alt=""></img>
   <a className="navlink__active" href="#" alt="">Projects</a>
   <a className="navlink" href="#" alt="">About</a>
   </div>
); 