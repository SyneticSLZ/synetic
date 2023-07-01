import React, { useEffect, useState } from "react";
import "../About/Nstory.css";
import {  animated, useSpring } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import man from "./man.png"
import starts from "./beautiful-shining-stars-night-sky.jpg"
import { Md3DRotation } from "react-icons/md";
import { GiWorld, GiFreedomDove } from "react-icons/gi"

export default function NStory(){
   

    return(
        <section class="section about" aria-labelledby="about-label">
        <div class="container">

          <figure class="about-banner" data-reveal="left">
            <img src={man} width="380" height="50%" loading="lazy" alt="about banner"
              class="w-100 img-1" />
{/* 
            <img src={starts} width="347" height="349" loading="lazy" alt="about banner"
              class="w-100 img-2" /> */}
          </figure>

          <div class="about-content" data-reveal="right">

            <p class="section-subtitle has-before" id="about-label">THE SPACE</p>

            <h2 class="h2  section-text">
              Our mission.
            </h2>
{/* 
            <p class="section-title">
              Charge your electric vehicle at home using one of our smart home char ge solutions or gain access to over
              3,000 public charging.
            </p> */}

            <div class="about-wrapper">

              <div class="about-card">

                <div class="title-wrapper">
                  <GiWorld className="icon"/>

                  <h3 class="card-title">A whole new reality</h3>
                </div>

                <p class="card-text">
                  Where anyone and anyone can be anything they desire, with no limits .
                </p>

              </div>

              <div class="about-card">

                <div class="title-wrapper">
                    
                <GiFreedomDove className="icon"/>

                  <h3 class="card-title">Freedom of expression</h3>
                </div>

                <p class="card-text">
                  We love our customers and we love the way they come.
                </p>

              </div>

            </div>

            <ul class="about-list">

              <li class="about-item">
              <Md3DRotation className="icon"/>

                <span class="span">SHOP FOR EXCLUSIVE BRANDS ONLY ON OUR PLATFORM</span>
              </li>

              <li class="about-item">
              <Md3DRotation className="icon"/>
                <span class="span">UNIQUE EVENTS EXCLUSIVE TO SYNETIC.</span>
              </li>

            </ul>

            <a href="#" class="btn btn-primary">
              <span class="span">Read More</span>

              <Md3DRotation className="icon"/>
            </a>

          </div>

        </div>
      </section>
    )
}