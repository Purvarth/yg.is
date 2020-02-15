import React from "react";
import "./imgRight.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";
import imgRight from "../../images/inner/pwd_managers.svg"; 

export default props => (
    <>
        <div className="gridContainer">
          <figure class="imgRight">
            <img src={imgRight} alt="" className="imgRight__img"/>
            <figcaption className="imgRight__caption">
                <span className="imgRight__number">01</span> Pew Research Center
            </figcaption>
          </figure>
        </div>
    </>
);  