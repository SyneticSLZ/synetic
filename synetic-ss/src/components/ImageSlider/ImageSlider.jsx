import React, { useEffect, useState } from "react";
import "../ImageSlider/ImageSlider.css";
import NFTimage from "../../images/10.png"


export default function ImageSlider(){
    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
    return(
<div className="image-slider">
    <div className="marquee_image">
  <div className="marquee_image-content">
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  <img src= { NFTimage } alt="new-synetic_souls nft"></img>
  </div>
</div>
</div>

    )
}