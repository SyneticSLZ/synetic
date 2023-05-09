import React, { useEffect, useState } from "react";
import "../Roadmap/Roadmap.css";

export default function Roadmap(){
    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
   

    return(
        <div id="roadmap" 
        className="roadmap_block"
      >
        <div className="roadmap_title">
            <h1>ROADMAP</h1></div>
        <div 
        className="roadmap reveal">
            
            <div className="roadmap_title-box">
            <div className="roadmap_number">
            <span> 1 </span>    
            </div>
            
            <div className="roadmap__box">
             <div className="roadmap_phase">
                  PHASE 1 - COMPLETED
             </div>
              <div className="roadmap_title">
                  SPRING 2022 - PRE LAUNCH</div>
             </div>
            </div>

        <div className="roadmap_main-box">
        <div className="roadmap__phase">
              <div className="roadmap__main-points">
                  <ul>
                      <li>
                      Website 1.2
                      </li>
                      <li>
                      Discord community promotion
                      </li>
                      <li>
                      MINTING WAVE NFTs
                      </li>
                  </ul>
              </div>
              <div className="roadmap_text">
              WAVE NFTs will be 100% pre-minted and launched as an OpenOcean collection
              </div>
        </div>
              <div className="roadmap_image">
                  <img width="175 " height="200" src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt=""></img>
              </div> 
        </div>   
        </div> 

        <div className="line">  </div>

        <div className="roadmap reveal">
            
            <div className="roadmap_title-box">
            <div className="roadmap_number">
            <span> 2 </span>    
            </div>
            
            <div className="roadmap__box">
             <div className="roadmap_phase">
                  PHASE 2 - 
             </div>
              <div className="roadmap_title">
                  SPRING 2022 - PRE LAUNCH</div>
             </div>
            </div>

        <div className="roadmap_main-box">
        <div className="roadmap__phase">
              <div className="roadmap__main-points">
                  <ul>
                      <li>
                      Website 1.2
                      </li>
                      <li>
                      Discord community promotion
                      </li>
                      <li>
                      MINTING WAVE NFTs
                      </li>
                  </ul>
              </div>
              <div className="roadmap_text">
              WAVE NFTs will be 100% pre-minted and launched as an OpenOcean collection
              </div>
        </div>
              <div className="roadmap_image">
                  <img width="175 " height="200" src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt=""></img>
              </div> 
        </div>   
        </div> 

        <div className="line">  </div>

        <div className="roadmap reveal">
            
            <div className="roadmap_title-box">
            <div className="roadmap_number">
            <span> 3 </span>    
            </div>
            
            <div className="roadmap__box">
             <div className="roadmap_phase">
                  PHASE 3 
             </div>
              <div className="roadmap_title">
                  SPRING 2022 - PRE LAUNCH</div>
             </div>
            </div>

        <div className="roadmap_main-box">
        <div className="roadmap__phase">
              <div className="roadmap__main-points">
                  <ul>
                      <li>
                      Website 1.2
                      </li>
                      <li>
                      Discord community promotion
                      </li>
                      <li>
                      MINTING WAVE NFTs
                      </li>
                  </ul>
              </div>
              <div className="roadmap_text">
              WAVE NFTs will be 100% pre-minted and launched as an OpenOcean collection
              </div>
        </div>
              <div className="roadmap_image">
                  <img width="175 " height="200" src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt=""></img>
              </div> 
        </div>   
        </div> 
        </div>
    )
}
