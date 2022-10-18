import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import {AnimatePresence} from 'framer-motion';

function Pages() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter> {/* this makes the page fade out before the other fades in*/}
    <Routes location={location} key={location.pathname}> {/* because we are working with router we need to add this for the animation to proprely work */}
      <Route path="/" element={<Home />} />
      {/* / significa basicamente a homepage e o elemento é o componente*/}
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched/>}/>
      <Route path="/recipe/:name" element={<Recipe/>}/>
    </Routes>
    </AnimatePresence>
  );
}

export default Pages;
