import React, { useEffect, useState } from "react";
import "../Footer/Footer.css"


export default function Footer(){
  
  const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);


    return (
 
    
    <footer className="footer"  
   
   >
     {/* <div className="footer-img" 
    >
{/* <img src="https://images.unsplash.com/photo-1536768139911-e290a59011e4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1dHVyaXN0aWMlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format" alt=""
></img> */}
{/* </div> */}

    <div className="reveal container"
    >
      <a href="/"> 
        <h3 className="footer__logo" width='100px' height="100px">Sinister Souls</h3>
        
    </a>

      <div className="footer__social">

        <a href="/">
           <i className="fab fa-brands fa-discord" 
           alt="discord">
            
             </i>JOIN US
        </a>
        
        <a href="/">
          <i className="fab 
          fa-brands fa-twitter" 
          alt="twitter">
            </i>FOLLOW US
        </a>
        
      </div>
    
      <div className="footer__links col1">
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="/">Blog</a>
      </div>

      <div className="footer__links col2">
        <a href="/">Careers</a>
        <a href="/">Support</a>
        <a href="/">Privacy Policy</a>
      </div>

      {/* <div class="footer__cta">
        <a href="#" class="button">Request Invite</a>
      </div> */}

      
    </div>
   
    <div className="footer__copyright">
        &copy; Sinister Souls. All Rights Reserved.
      </div>
    <div className="attribution">
      <a href="/">Coded by PinkPistachioButterfly</a>.
      
    </div>
  </footer>)
 
}