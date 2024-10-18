import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Desktop/Home";
import Register from "./pages/Desktop/Register";

export default function Router(){
  const location = useLocation()

  return(
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>

      <Route path="/about" element={""}/>
      <Route path="/suport" element={""}/>
      <Route path="/faq" element={""}/>
      
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={""}/>
    </Routes>
  )
}