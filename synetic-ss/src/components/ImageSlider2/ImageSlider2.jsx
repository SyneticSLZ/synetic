import React, { useState, useEffect} from "react";
import "../ImageSlider2/ImageSlider2.css";
import NFTimage from "../../images/10.png"

export default function ImageSlider2() {
    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
    return(
<div className="image-slider2"
>
    <div className="marquee_image2">
  <div className="marquee_image2-content">
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