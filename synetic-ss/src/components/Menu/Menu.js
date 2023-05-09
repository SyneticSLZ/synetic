import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <></>
    // <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      /* <a href="#about-main" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        About
      </a>
      <a href="#team" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Team
        </a>
      <a href="#hero" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Mint
        </a>
      <a href="#roadmap" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Roadmap
        </a>

        <div className="social-list">
        <a href="https://twitter.com/_sinister_souls" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        <i className="fab fa-discord"></i>
        </a>
        <a href="https://twitter.com/_sinister_souls" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        <i className="fab fa-medium"></i>
        </a>  */
        /* <a href="https://twitter.com/_sinister_souls" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        <i className="fab fa-twitter"></i>
        </a> */

        /* </div> */
                    
       
    // </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;

