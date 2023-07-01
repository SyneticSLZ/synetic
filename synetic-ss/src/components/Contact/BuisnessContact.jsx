import React, { useEffect, useState } from "react";
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
// import DeleteIcon from '@mui/icons-material/Delete';

import "../Contact/Contact.css"

export default function BuisnessContact (){

    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
    

    return(
        <div id="row">
        <div id="Offer">
            {/* <h1>WHAT WE OFFER</h1> */}

            <h3 className="h3">Build.</h3>
            <p className="p">We will work closely and swiftly with you to build you a shop that aligns with your brand goals in a streamlined process</p>

            <div className="center"><div>
			<span class="m_scroll_arrows unu"></span>
			<span class="m_scroll_arrows doi"></span>
			<span class="m_scroll_arrows trei"></span>
		    </div></div>

            <h3 className="h3">Integrate.</h3>
            <p className="p">We establish and get you running on the SyneticX platform </p>
            <div className="center"><div>
			<span class="m_scroll_arrows q4"></span>
			<span class="m_scroll_arrows q5"></span>
			<span class="m_scroll_arrows q6"></span>
		    </div></div>
            <h3 className="h3"> Manage.</h3>
            <p className="p">Update or add new products/features to your store</p>
            <div className="center"><div>
			<span class="m_scroll_arrows q7"></span>
			<span class="m_scroll_arrows q8"></span>
			<span class="m_scroll_arrows q9"></span>
		    </div></div>
            <h3 className="h3">Events.</h3>
            <p className="p">We will provide and host live events for new clothing lines or marketing attempts  </p>





        </div>
        <div id="contact">
            
            <h1>CONTACT US</h1>
            <form className="reveal">
                <input type="text"
                placeholder="Full Name" required/>
                <input type="email" placeholder="Your Email here please" required/>
                <textarea placeholder="Details here" name="message"></textarea>
                <input type="submit" value="send"/>
            </form>
        </div>
        </div>
    )
}