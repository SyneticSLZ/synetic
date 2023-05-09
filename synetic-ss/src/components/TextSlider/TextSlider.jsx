import React, { useEffect, useState} from "react";
import "../TextSlider/TextSlider.css";

export default function TextSlider(){
    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
   

    return(
<div 
className="text-slider"
 >
    <div className="marquee">
  <ul className="marquee-content">
   <li>SYNETIC   </li>
   <li> <span>SINISTER</span>  SOULS</li>
   <li>SYNETIC   </li>
   <li> <span>SINISTER</span>  SOULS</li>
   
   
  
   
  </ul>
  </div>
</div>


    )
}