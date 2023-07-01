import React, { useEffect, useState} from "react";
import TeamBox from "../TeamBox/TeamBox"
import "../Team/Team.css"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import muff from "./M.png"
import seamus from "./S.png"
export default function Team(){


    return(
//       <>
//       <div id="demo-para">
  
//   <Parallax pages={4} style={{ width: '100%', height: '100%'}}>

//   <ParallaxLayer
//     offset={1}
//     speed={0.5}
//      >
// <div className="text-body">
//             <h1>Meet The Team</h1>
//                 <div className="straplines">
//                 <p> Join Us. </p>
//                 <p> Let's disrupt together.</p> 
//                 </div>
//             </div>
//       <div className="team-container">
//                 <TeamBox title="Creator Lex0" text="Into retro gaming,sushi and racing dolphins"/>
//                 </div>
//   </ParallaxLayer>

//   <ParallaxLayer
//     offset={1.9}
//     speed={0.6}
//     style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//     <div className="team-container">
//                 <TeamBox title="Creator Ruyu" text="American Muscle car mad and the Art of War"/>
//                 </div>
//   </ParallaxLayer>

//   <ParallaxLayer
//     offset={2.2}
//     speed={0.7}
//     style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
      
//     }}>
//     <div className="team-container">
//     <TeamBox title="Builder Panthera" text="Fav character: Yoshimitsu, deconstructed apple pies" />
//                 </div>
//   </ParallaxLayer>

// </Parallax>
// </div>
        
<div id="team">    
<div className="text-body">
             <h1>Meet The Founders</h1>
                 {/* <div className="straplines reveal">
                 <p> Join Us. </p>
                 <p> Let's disrupt together.</p> 
                 </div> */}
             </div>
            <div className="team-container reveal">






        <div className="team__box">
            <div className="team__box-img1">
                <img src={muff} alt="" height="200px" width="200px" />
            </div>
            <div className="team__title">
                <p>Ro Mehmi</p></div>
                <h2></h2>
                <div className="team-discord">
                <a className="social-list__link" href="https://twitter.com/_sinister_souls">
                            <i className="fab fa-discord"></i>
                        </a>
                </div>
            <div className="team__text">
                <p>Lead writer of Dr Szink. SciFi junkie. Blockchain Dev since 2017</p>
                
        </div>
        </div>














        <div className="team__box">
            <div className="team__box-img1">
                <img src={seamus}alt="" height="200px" width="200px"/>
            </div>
            <div className="team__title">
                <p>Alexander Macgregor</p></div>
                <h2></h2>
                <div className="team-discord">
                <a className="social-list__link" href="https://twitter.com/_sinister_souls">
                            <i className="fab fa-discord"></i>
                        </a>
                </div>
            <div className="team__text">
                <p>Stopping the place from burning down</p>
                
        </div>
        </div>
                
        

                </div>
        </div> 

       
      
    )
}