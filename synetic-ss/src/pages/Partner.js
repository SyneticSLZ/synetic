import React, { useState, useContext, useRef } from "react";
import Navbar from "../components/Navbar/Navbar"
import Team from "../components/Team/Team"
// import Syneverse from "./components/Syneverse/Syneverse"
import About from "../components/About/About"
import NFTgame from "../components/NFTgame/NFTgame";
import Hero from "../components/Hero/Hero";
import H1 from "../components/Hero/H1";
import UseCase from "../components/Roadmap/UseCase";
import Roadmap from "../components/Roadmap/Roadmap";
import Codeslider from "../components/ImageSlider/codepentester";
import Contact from "../components/Contact/Contact";
import BuisnessContact from "../components/Contact/BuisnessContact";
import Footer from "../components/Footer/Footer";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import TextSlider from "../components/TextSlider/TextSlider";
import ImageSlider2 from "../components/ImageSlider2/ImageSlider2";
import Oasis from "../components/Oasis/Oasis";
import Benefit from "../components/Benefitss/Benefit";
import DotRing from "../components/DotRing/DotRing";
import { MouseContext } from "../context/mouse-context";
import PartnerHero from "../components/Hero/PartnerHero";
import { Int } from "../components/Banner/Integrate";
// import FocusLock from 'react-focus-lock';
import {  Menu } from '../components';
import { Burger } from '../components';
// import Blank from "../Blank/Blank";
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import { Parallax, ParallaxLayer } from 'react-spring';
import Banner from "../components/Banner/Banner";
import Manage from "../components/Banner/Manage";

export default function Contactpage() {
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
        {/* <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        > */}
        {/* </div> */}
      </div>

      {/* <div ref={node}> */}
          {/* <FocusLock disabled={!open}> */}
            {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} /> */}
            {/* <Menu open={open} setOpen={setOpen} id={menuId} /> */}
          {/* </FocusLock> */}
      {/* </div> */}

      <Navbar />
      <H1 />

      <PartnerHero />
      <Banner />
      <Int />
      <Manage />
        {/* <Benefit /> */}

        
        {/* <UseCase /> */}
        <TextSlider />
        <Contact />
        {/* <Contact /> */}
         <Footer /> 
         </>
     </ThemeProvider>
         );
}
