import React, { useState } from "react";
import "../Navbar/Navbar.css";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";

import {Link as Scrolllink, animateScroll} from "react-scroll";
import {Link} from "react-router-dom";


export default function Navbar(){
  
const [open, setOpen] = useState(false);
    return (
        <header>
            <div className="logo"> 
            <Scrolllink to="/" smooth={true} duration={3000} onClick ={ () => 
                animateScroll.scrollToTop()}> SYNETIC  </Scrolllink>  
            </div>
            <div className="header-list">
            
            <div className="nav__list">
               <ul> <li className="nav__link">
                   <Scrolllink  smooth={true} duration={3000}><Link to="/about" class="link">About</Link></Scrolllink></li>
                    <li className="nav__link">
                        <Scrolllink  smooth={true} duration={3000} ><Link to="/contact" class="link">Contact</Link></Scrolllink></li>
                    <li className="nav__link">
                        <Scrolllink smooth={true} duration={3000}><Link to="/home" class="link">Home</Link></Scrolllink></li>
               </ul>
            </div>

            <div className="social-list">
                        <Scrolllink className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-discord"></i>
                         </Scrolllink>

                         <Scrolllink className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-medium"></i>
                        </Scrolllink>

                         <Scrolllink className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-twitter"></i>
                        </Scrolllink>
        </div>
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