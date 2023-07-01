import React, { useState, useContext, useRef, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "../components/Navbar/Navbar"
import Team from "../components/Team/Team"
// import Syneverse from "./components/Syneverse/Syneverse"
import About from "../components/About/About"
import NFTgame from "../components/NFTgame/NFTgame";
import Hero from "../components/Hero/Hero";
import Home123 from "../components/Hero/HeroHome";
import Roadmap from "../components/Roadmap/Roadmap";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import TextSlider from "../components/TextSlider/TextSlider";
import ImageSlider2 from "../components/ImageSlider2/ImageSlider2";
import Oasis from "../components/Oasis/Oasis";
import DotRing from "../components/DotRing/DotRing";
import { MouseContext } from "../context/mouse-context";
// import FocusLock from 'react-focus-lock';
import {  Menu } from '../components';
import { Burger } from '../components';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import NavbarHero from "../components/Hero/NavbarHero"
import { Parallax, ParallaxLayer } from 'react-spring';
// import IFRAME from "../components/Hero/HeroHome";


export default function Home() {
  let Parallax;
  const { cursorChangeHandler } = useContext(MouseContext);
  const [open, setOpen] = useState(false);


  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

function reveal(){
  let reveals = document.querySelectorAll(".reveal");

  for (var i=0; i < reveals.length; i++)  {
    let windowHeight = window.innerHeight;
    let elementTop =
    reveals[i].getBoundingClientRect().top;
    let elementVisible = 2;

    if (elementTop < windowHeight - elementVisible)
    {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
  return( 
    <ThemeProvider theme={ theme }>
     <>
      <GlobalStyles />
      <DotRing />

      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
        </div>
      </div>

      <div ref={node}>
          {/* <FocusLock disabled={!open}> */}
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          {/* </FocusLock> */}
      </div>

        <NavbarHero />
         
          {/* <Home123 />  */}
         {/* <input placeholder="Message..."/>
         <button onClick={redirectToCheckout}
        disabled={isLoading}>Send Message</button> */}
         </>
    </ThemeProvider>
         );
}

