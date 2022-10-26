import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './Home';
import Movie from './Movie';
import Searched from './Searched';
import Trending from './Trending';
import { AnimatePresence } from 'framer-motion';

function Pages() {

    const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
      <Route path ="/" element={<Home/>}/>
      <Route path="/trending" element={<Trending/>} />
      <Route path="/searched/:search" element={<Searched/>}/>
      <Route path="/Movie/:name" element={<Movie/>}/>

      </Routes>
    </AnimatePresence>
  )
}

export default Pages

