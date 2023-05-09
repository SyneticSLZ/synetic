import React, { useEffect, useState } from "react";
import "../Contact/Contact.css"

export default function Contact (){

    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
    

    return(
        <div 
        id="contact"
       
        >
            <h1>CONTACT US</h1>
            <form className="reveal">
                <input type="text"
                placeholder="Full Name" required/>
                <input type="email" placeholder="Your Email here please" required/>
                <textarea placeholder="Details here" name="message"></textarea>
                <input type="submit" value="send"/>
            </form>
        </div>
    )
}