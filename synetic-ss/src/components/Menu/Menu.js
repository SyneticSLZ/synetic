import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import {Link as Scrolllink, animateScroll} from "react-scroll";
import {Link} from "react-router-dom";

const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    // <></>
     <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
       <a href="#about-main" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        <Scrolllink smooth={true} duration={3000}>
            <Link to="/synetic-ss/home" To="/synetic-ss/home">Home</Link>
          </Scrolllink>
      </a>
      <a href="#team" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        <Scrolllink smooth={true} duration={3000}>
            <Link to="/synetic-ss/Partner" To="/synetic-ss/Partner">Partner With Us</Link>
          </Scrolllink>
        </a>
      <a href="#hero" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        <Scrolllink smooth={true} duration={3000}>
            <Link to="/synetic-ss/about" To="/synetic-ss/about">About Us</Link>
          </Scrolllink>
        </a>
      <a href="#roadmap" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        <Scrolllink smooth={true} duration={3000}>
            <Link to="/synetic-ss/Ecommerce" To="/synetic-ss/Ecommerce">Dashboard</Link>
          </Scrolllink>
        </a>

        <div className="social-list">
        <a href="https://twitter.com/_sinister_souls" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        <i className="fab fa-discord"></i>
        </a>
        <a href="https://twitter.com/_sinister_souls" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        <i className="fab fa-medium"></i>
        </a>  
         <a href="https://twitter.com/_sinister_souls" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        <i className="fab fa-twitter"></i>
        </a> 

         </div> 

                    
       
</StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;

