import React, { useEffect, useState} from "react";
import "../Hero/Hero.css"
import {  animated, useSpring } from 'react-spring';


export default function Hero(){

const style1 = useSpring({
    from: {
       opacity:0, marginTop: -100 },
    to: {  
        opacity:1, marginTop: 0   },
    config: { duration:1500 }

});

// const style2 = useSpring({
//     from: { marginLeft: -400 },
//      to:  {  marginLeft: 400 },
//       config: { duration:1500 }

// });



    return(
        
        <animated.div id="hero" className="hero section-transition" style={ style1 }>
                
                <div  className="hero-text" >
                    <h1>SYNETIC</h1>
                    <h3 className="reveal"> Welcome to the future.</h3>
                
                    <button className="hero-btn">CONNECT WALLET</button>
                </div>

            
                <div className="hero-image reveal">
                    <img width="600" height="400" src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJpc3RpYyUyMGNpdHl8ZW58MHx8MHx8" 
                        alt="" />
                </div>

     </animated.div>
    )
}