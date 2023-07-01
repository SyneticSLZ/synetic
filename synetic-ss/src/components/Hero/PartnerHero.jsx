import React, { useEffect, useState } from "react";
import "../Hero/PartnerHero.css";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {  animated, useSpring } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function PartnerHero(){
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Build", "Integrate", "Manage", "Live Events" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
   

    return(
        <div id="about-main" 
        className="aboutq"
        >
        
         <div className="row">
        

        <div className="about-text"
        >
            <h1 className="h1">LET’S BUILD THE THE FUTURE TOGETHER</h1>
            <p className="h12"> <span className="txt-rotate b" dataPeriod="1000" data-rotate='[ "Build", "Integrate", "Manage", "live Events" ]'><span className="wrap">{text}</span></span></p>
            {/* A new open world multi-planetary system created with endless possibilities for escape, on the blockchain. */}
            <div className="about_body-text2 reveal">
                <p><b>We are here to help and assist all types of buisnesses and creators, Brands, studios, independent creators, you are all part of the syentic Platofrm.</b></p>
                <p><b>Expand to a new global market, and sell to every corner of the world.</b></p>

            </div>
            <br />
        <button className="about-btn">LEARN MORE</button>
        </div>
        <div className="about-image">
        
        <img className="reveal"
        width="600" 
        height="400" 
        src="https://cdn.discordapp.com/attachments/980829870651240478/980834767689883658/Sci_Fi_Picture_Blender.png" alt="" />
        </div>
        </div>
        </div>
    )
}