import React from "react";
import "./TeamBox.css"

export default function TeamBox(props){
    return(
        <div className="team__box">
            <div className="team__box-img">
                {<img src={props.img} alt=""/>}
            </div>
            <div className="team__title">
                <p>{props.title}</p></div>
                <h2></h2>
                <div className="team-discord">
                <a className="social-list__link" href="https://twitter.com/_sinister_souls">
                            <i className="fab fa-discord"></i>
                        </a>
                </div>
            <div className="team__text">
                <p>{props.text}</p>
                
        </div>
        </div>
    )
}