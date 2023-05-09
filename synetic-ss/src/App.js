import React, { useState, useContext, useRef } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { MouseContext } from "./context/mouse-context";
// import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from './hooks/useOnClickOutside';
import Home from "./pages/Home";
import Aboutpage from "./pages/About";
import Contactpage from "./pages/Contact";




export default function App() {

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<Aboutpage />} />
          </Routes>      
      </BrowserRouter>
    </div>
         );
}
