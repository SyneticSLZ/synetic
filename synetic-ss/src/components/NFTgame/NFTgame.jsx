import React, { useEffect, useState} from "react";
import "../NFTgame/NFTgame.css"

export default function NFTgame (){

    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
   

    return(
        <div id="main"
       >
          
            <div className="NFTgame-heading">
               <h2>NFT GAMING</h2>
             <h1 className="NFTgame-main">SYNETIC<span> sinister</span>souls</h1>
              
             <p className="details">Escape from the harsh confines and constraints of
                 modern day reality.  
                </p>
             <p className="details details_secondary reveal"> COMING SOON!</p>
             <div className="NFTgame-btn_section">
                 <a href="mailto:sinistersouls2922@gmail.com" className="NFTgame-btn">CONTACT US</a>
             </div>
         </div>
     </div>
      
    )
}