import React, { useEffect, useState } from "react";
import "../About/About.css";
import {  animated, useSpring } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function About(){
    const style1 = useSpring({
        from: {
           opacity:0, marginTop: -100 },
        to: {  
            opacity:1, marginTop: 0   },
        config: { duration:1500 }
    
    });
    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
   

    return(
        <animated.div id="about-main" className="about">
        <div className="h1"><h1>"EMBRACE THE FUTURE"</h1></div> 
         <div className="row23">
        <div className="about-image">
        
        <img className="reveal"
        width="600" 
        height="400" 
        src="https://cdn.discordapp.com/attachments/980829870651240478/980834767689883658/Sci_Fi_Picture_Blender.png" alt="" />
        </div>

        <div className="about-text"
        >
            
            <p className="highlight-text"> Bringing Customers and Brands to the future <br></br> In a new innovative Digital Realm to explore</p>
            {/* A new open world multi-planetary system created with endless possibilities for escape, on the blockchain. */}
            <div className="about_body-text reveal">
            {/* <p><b> */}
{/* Step into the world of Synetic, where a global community of brands and small businesses unite on a single virtual platform.lose yourself in a fashion paradise where every trend comes to life. <br></br>Synetic is your passport to an escape from reality, where your desires become reality. </b></p> */}
            <p><b >EXPLORE</b>    a whole new world, where anything is possible </p>
            <p><b >JOIN </b>   a growing community of brands you love</p>
            <p><b>BUILD. OWN. CREATE.</b></p>
            {/* <p>Live a second digital reality where nothing is off limits. </p>
            <p> Use your Sinister Soul NFTs as playable characters</p>
            <p>EXPLORE. BUILD. OWN. EVOLVE.</p> */}
            </div>
            <br />

            {/* <div className="about_body-text about_body-text_highlight">
            <p>Live a second digital reality where nothing is off limits. </p>
            <p> Use your Sinister Soul NFTs as playable characters</p>
            <p>EXPLORE. BUILD. OWN. EVOLVE.</p>
            </div> */}
       
        <button className="about-btn">LEARN MORE</button>
        </div>
        </div>
        </animated.div>
    )
}