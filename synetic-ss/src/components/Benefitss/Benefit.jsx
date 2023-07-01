import React, { useEffect, useState} from "react";
// import TeamBox from "../TeamBox/TeamBox"
import "../Benefitss/Benefit.css"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Benefit(){


    return(

<div id="team">    

            <div className="team-container reveal"><div className="row-team">

        <div className="team__box1">

            
                <div className="team-discord">
                <a className="social-list__link" href="https://twitter.com/_sinister_souls">
                            <i className="fab fa-discord"></i>
                            {/* <i className="fa-light fa-flux-capacitor" style="color: #e900b3;"></i> */}
                        </a>
                <div className="team__title">
                <p>THIS IS THE FUTURE</p></div>
                
                </div>
            <div className="team__text">
                <p>Join and get a head start and become a more innovative brand</p>
                
        </div>
        </div>
        <div className="team__box1">

            
<div className="team-discord">
<a className="social-list__link" href="https://twitter.com/_sinister_souls">
                            <i className="fab fa-discord"></i>
                            {/* <i className="fa-light fa-flux-capacitor" style="color: #e900b3;"></i> */}
                        </a>
<div className="team__title">
<p>NO LIMITS</p></div>
</div>
<div className="team__text">
<p>Untapped market of billions around the globe</p>

</div>
</div>


<div className="team__box1">

            
<div className="team-discord">

<a className="social-list__link" href="https://twitter.com/_sinister_souls">
            <i className="fab fa-discord"></i>
            {/* <i className="fa-light fa-flux-capacitor" style="color: #e900b3;"></i> */}
        </a>
        <div className="team__title">
<p>BENEFIT #3</p></div>
</div>
<div className="team__text">
<p>Join and get a head start and become a more innovative brand</p>

</div>
</div>
        </div> 
        </div>
</div>       
      
    )
}