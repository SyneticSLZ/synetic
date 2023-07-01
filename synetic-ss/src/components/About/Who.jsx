import React, { useEffect, useState } from "react";
import "../About/Who.css";
import {  animated, useSpring } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import a from "./about-banner.png"
export default function Who(){
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
        // <animated.div id="about-main" className="about">
        // {/* <div className="quote1"><h1>" EMBRACE THE FUTURE"</h1></div>  */}

        // <div className="row2">
        // <div className="story">
        //     <div className="storytitle">OUR STORY</div>
        //     <div className="storytext">

        //             <p className="Text">At Synetic, we believe that shopping should be more than just a transaction—it should be an interactive and collaborative experience that brings people together. <br></br>Discover a curated selection of brands in one place, streamlining your experience. Engage with live events, join virtual styling sessions, product demos, and interactive giveways. <br></br>Connect with friends, hosting virtual shopping meet-ups to explore trends and share recommendations.<br></br> Experience a convenient and exciting shopping journey, redefining the way you shop. <br></br><br></br>Join us at Synetic, where collaboration meets convenience for unforgettable moments in fashion and lifestyle.</p>
        //     </div>
        // </div>

        // <div className="stotyimg">
        
        // <img className="reveal"
        // width="600" 
        // height="400" 
        // src="https://cdn.discordapp.com/attachments/980829870651240478/980834767689883658/Sci_Fi_Picture_Blender.png" alt="" />
        // </div>

        // </div>
        // </animated.div>
        <section class="nabout" id="about">

        <div class="nabout-banner">
          <img src={a} alt="A man in a alice blue shirt with a thinking expression"/>
        </div>

        <div class="nabout-content nsection-content">

          {/* <p class="nsection-subtitle">Our Story</p> */}

          <div class=" nsection-titlee">Our Story</div>

          <p class="nsection-text">

          Discover a curated selection of brands in one place, streamlining your experience. Engage with live events, join virtual styling sessions, product demos, and interactive giveways. <br></br>Connect with friends, hosting virtual shopping meet-ups to explore trends and share recommendations.<br></br> Experience a convenient and exciting shopping journey, redefining the way you shop.
          Join us at Synetic, where collaboration meets convenience for unforgettable moments in fashion and lifestyle.
          </p>

          <div class="nbtn-group">

            <button class="btn btn-primary">Learn More</button>
          </div>

        </div>

      </section>
    )
}