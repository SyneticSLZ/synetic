import React, { useEffect, useState } from "react";
import "../Roadmap/UseCase.css";

export default function UseCase(){
    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
   

    return(
        <div className="container">
        <div className="uroadmap_title">
            <h1>WHY US ?</h1></div>
        <div id="uroadmap1" 
        className="uroadmap_block"
      >
        <div className="2">
        <div className="uroadmap reveal">
            
            <div className="uroadmap_title-box">
            <div className="uroadmap_number">
            <span> 1 </span>    
            </div>
            
            <div className="uroadmap__box">
             {/* <div className="uroadmap_phase">
                  PHASE 1 - COMPLETED
             </div>
              <div className="uroadmap_title">
                  SPRING 2022 - PRE LAUNCH</div> */}
                  <div className="uroadmap_title">
                  INVESTMENT TITANS
             </div>
             </div>
            </div>

        <div className="uroadmap_main-box">
        <div className="uroadmap__phase">
              <div className="uroadmap__main-points">
              <div className="uroadmap_text">
              Synetic offers a pioneering investment opportunity in the digital frontier,allowing institutional investors to be early adopters of these groundbreaking innovations.
             </div>
                  <ul> 
                    <li>
                        In Game Real Estate (Coming Soon)
                    </li>
                    <li>
                        In Game Stock Market (Coming Soon)
                    </li>
                    <li>
                         Virtual Currency Trading (Coming Soon)
                    </li>
                </ul>
                  
              </div>
              <div className="uroadmap_textn">
              Learn More
              </div>
        </div>
              
        </div>   
        </div> 

        <div className="uline">  </div>

        <div className="uroadmap reveal">
            
            <div className="uroadmap_title-box">
            <div className="uroadmap_number">
            <span> 2 </span>    
            </div>
            
            <div className="uroadmap__box">
             {/* <div className="uroadmap_phase">
                  PHASE 1 - COMPLETED
             </div>
              <div className="uroadmap_title">
                  SPRING 2022 - PRE LAUNCH</div> */}
                  <div className="uroadmap_title">
                  Retail Investors
             </div>
             </div>
            </div>

        <div className="uroadmap_main-box">
        <div className="uroadmap__phase">
              <div className="uroadmap__main-points">
              <div className="uroadmap_text">
              Synetic presents a long-term investment prospect, catering to retail investors seeking to participate in the unfolding digital landscape.
             </div>
                  <ul> 
                    <li>
                        In Game Real Estate (Coming Soon)
                    </li>
                    <li>
                        In Game Stock Market (Coming Soon)
                    </li>
                    <li>
                         Virtual Currency Trading (Coming Soon)
                    </li>
                </ul>
                  
              </div>
              <div className="uroadmap_textn">
              Learn More
              </div>
        </div>
              
        </div>   
        </div> 
        </div>
        {/* <div className="line">  </div> */}
        <div className="d">

        <div className="uroadmap reveal">
            
            <div className="uroadmap_title-box">
            <div className="uroadmap_number">
            <span> 3 </span>    
            </div>
            
            <div className="uroadmap__box">
             {/* <div className="uroadmap_phase">
                  PHASE 1 - COMPLETED
             </div>
              <div className="uroadmap_title">
                  SPRING 2022 - PRE LAUNCH</div> */}
                  <div className="uroadmap_title">
                  CASUAL Adventurers
             </div>
             </div>
            </div>

        <div className="uroadmap_main-box">
        <div className="uroadmap__phase">
              <div className="uroadmap__main-points">
              <div className="uroadmap_text">
              Discover unique and captivating experiences that shape the future of shopping and digital experiances.
             </div>
                  <ul> 
                    <li>
                        In Game Real Estate (Coming Soon)
                    </li>
                    <li>
                        In Game Stock Market (Coming Soon)
                    </li>
                    <li>
                         Virtual Currency Trading (Coming Soon)
                    </li>
                </ul>
                  
              </div>
              <div className="uroadmap_textn">
              Learn More
              </div>
        </div>
              
        </div>   
        </div> 
        <div className="line">  </div>
        <div className="uroadmap reveal">
            
            <div className="uroadmap_title-box">
            <div className="uroadmap_number">
            <span> 1 </span>    
            </div>
            
            <div className="uroadmap__box">
             {/* <div className="uroadmap_phase">
                  PHASE 1 - COMPLETED
             </div>
              <div className="uroadmap_title">
                  SPRING 2022 - PRE LAUNCH</div> */}
                  <div className="uroadmap_title">
                  INVESTMENT TITANS
             </div>
             </div>
            </div>

        <div className="uroadmap_main-box">
        <div className="uroadmap__phase">
              <div className="uroadmap__main-points">
              <div className="uroadmap_text">
              Synetic offers a pioneering investment opportunity in the digital frontier,allowing institutional investors to be early adopters of these groundbreaking innovations.
             </div>
                  <ul> 
                    <li>
                        In Game Real Estate (Coming Soon)
                    </li>
                    <li>
                        In Game Stock Market (Coming Soon)
                    </li>
                    <li>
                         Virtual Currency Trading (Coming Soon)
                    </li>
                </ul>
                  
              </div>
              <div className="uroadmap_textn">
              Learn More
              </div>
        </div>
              
        </div>   
        </div> 
        </div>
        </div>
        </div>
    )
}
