import React, { useState, useContext, useRef, useEffect } from "react";
import {BrowserRouter, Routes, Route, Router, Link, Navigate} from 'react-router-dom'
import { MouseContext } from "./context/mouse-context";
import { useStateContext } from "./context/contextProvider";
import { AuthContext } from "./context/AuthContext";
// import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from './hooks/useOnClickOutside';
import  Home from "./pages/Home"
import Aboutpage from "./pages/About";
import Contactpage from "./pages/Contact";
import Register from "./pages/Register"
import Partner from "./pages/Partner"
import Dashboard from "./pages/Dashboard";
import New from "./Dashboard-pages/New/new";
import StripeCheckout from "./pages/StripenWs"
import Single from "./Dash-Components/single/single";
import Login from "./pages/login";
import { productInputs, userInputs } from "./formSource";

import { Navbar, Footer, Sidebar, ThemeSettings } from './Dash-Components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './Dashboard-pages';
// import { AuthContext } from "./context/AuthContext";
// import Checkout from "./pages/Checkout"
export default function App() {
    const { activeMenu } = useStateContext();
    const {currentUser} = useContext(AuthContext)

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


  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/synetic-ss/login" />;
  };

  console.log(currentUser)
  return (
    
    <div>
      {/* <Aboutpage /> */}
      <BrowserRouter>
        <Routes>
        <Route path="/synetic-ss" element={<Home />} />


        <Route element={ <RequireAuth> <Home /> </RequireAuth>} />

        {/* dashboard pages */}
          <Route path="/synetic-ss/Dashboard" element={ <RequireAuth> <Dashboard /></RequireAuth>} >
                {/* Dashboard */}
                <Route path="/synetic-ss/Dashboard" element={ <RequireAuth> (<Ecommerce />) </RequireAuth>} />
                {/* pages  */}
                <Route path="/synetic-ss/Dashboard/orders" element={ <RequireAuth> <Orders /></RequireAuth>} />
                <Route path="/synetic-ss/Dashboard/employees" element={ <RequireAuth> <Employees /></RequireAuth>} />
                <Route path="/synetic-ss/Dashboard/customers" element={ <RequireAuth> <Customers /></RequireAuth>} />

                {/* apps  */}
                <Route path="/synetic-ss/Dashboard/kanban" element={ <RequireAuth> <Kanban /></RequireAuth>} />
                <Route path="/synetic-ss/Dashboard/editor" element={ <RequireAuth> <Editor /></RequireAuth>} />
                <Route path="/synetic-ss/Dashboard/calendar" element={ <RequireAuth> <Calendar /></RequireAuth>} />
                <Route path="/synetic-ss/Dashboard/color-picker" element={ <RequireAuth> <ColorPicker /></RequireAuth>} />

                {/* charts  */}
                <Route path="/synetic-ss/Dashboard/line" element={ <RequireAuth> <Line /></RequireAuth>} />
                <Route path="/synetic-ss/Dashboard/employees/single" element={ <RequireAuth> <Single /></RequireAuth>} />
                <Route path="/synetic-ss/Dashboard/bar" element={ <RequireAuth> <Bar /></RequireAuth>} />
                 <Route path="/synetic-ss/Dashboard/new" element={<New />} />
                 {/* <Route 
                 path="/synetic-ss/Dashboard/new"
                element={<New inputs={productInputs} title="Add New Product" />}
                 />  */}
                <Route path="/synetic-ss/Dashboard/financial" element={ <RequireAuth> <Financial /></RequireAuth>} />
                <Route path="/synetic-ss/Dashboard/color-mapping" element={ <RequireAuth> <ColorMapping /></RequireAuth>} />
                <Route path="/synetic-ss/Dashboard/pyramid" element={ <RequireAuth> <Pyramid /></RequireAuth>} />
                <Route path="/synetic-ss/Dashboard/stacked" element={ <RequireAuth> <Stacked /></RequireAuth>} />
          </Route>


          <Route path='/synetic-ss/contact' element={<Contactpage />} />
          <Route path='/synetic-ss/login' element={<Login />} />
          <Route path='/synetic-ss/home' element={<Home />} />
          <Route path="/synetic-ss/about" element={<Aboutpage />} />
          <Route path="/synetic-ss/Register" element={<Register />} />
          <Route path="/synetic-ss/Partner" element={<Partner/>} />
          {/* <Route path="/synetic-ss/stripe" element={<Checkout/>} /> */}
          </Routes>      
      </BrowserRouter>
      {/* <Checkout /> */}
    </div>
         );
}
