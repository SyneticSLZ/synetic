import React, { useState } from "react";
import "../Hero/NavbarHero.css";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";

import {Link as Scrolllink, animateScroll} from "react-scroll";
import {Link} from "react-router-dom";


export default function NavbarHero(){
  
const [open, setOpen] = useState(false);
    return (
        <header className="headerHero2">
            <div className="logo2"> 
            <Scrolllink to="/" smooth={true} duration={3000} onClick ={ () => 
                animateScroll.scrollToTop()}> SYNETIC  </Scrolllink>  
            </div>
            <div className="header-list2">
            
            <div className="nav__list2">
      <ul>
      <li className="nav__link2">
          <Scrolllink smooth={true} duration={3000}>
            <Link to="/synetic-ss/home" className="link2" To="/synetic-ss/home">Home</Link>
          </Scrolllink>
        </li>
        <li className="nav__link2">
          <Scrolllink smooth={true} duration={3000}>
            <Link to="/synetic-ss/about" className="link2" To="/synetic-ss/about">About Us</Link>
          </Scrolllink>
        </li>
        <li className="nav__link2">
          <Scrolllink smooth={true} duration={3000}>
            <Link to="/synetic-ss/Partner" className="link2" To="/synetic-ss/Partner">Partner With Us</Link>
          </Scrolllink>
        </li>
      </ul></div>

            {/* <div className="social-list">
                        <Scrolllink className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-discord"></i>
                         </Scrolllink>

                         <Scrolllink className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-medium"></i>
                        </Scrolllink>

                         <Scrolllink className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-twitter"></i>
                        </Scrolllink>
        </div> */}
            </div>
        
<div className="burger">
           <Burger open={open} setOpen={setOpen} />
           <Menu open={open} setOpen={setOpen} />

           
 </div>
        </header>
       
    )}



//                   <div className="showNav_social-icons">
//                     <li className="social-list__item">
//                         <a className="social-list__link" href="https://twitter.com/_sinister_souls">
//                         <i className="fab fa-discord"></i>
//                         </a></li>

//                     <li className="social-list__item">
//                         <a className="social-list__link" href="https://twitter.com/_sinister_souls">
//                         <i className="fab fa-medium"></i>
//                         </a></li>

//                     <li className="social-list__item">
//                         <a className="social-list__link" href="https://twitter.com/_sinister_souls">
//                         <i className="fab fa-twitter"></i>
//                         </a></li>
//                         </div>
// </ul>
// </nav>
//     
//