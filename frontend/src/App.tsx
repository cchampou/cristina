import React from 'react';

import {Route, Routes} from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import Homepage from "./pages/Homepage";
import Collection from './pages/Collection';

import About from "./pages/About";

import routes from './router';
import './global.css';
import {ParallaxProvider} from "react-scroll-parallax";

function App() {

  return (
      <ParallaxProvider>
        <Routes>
          <Route path={routes.homepage.path} element={<Homepage/>}/>
          <Route path={routes.portfolio.path} element={<Portfolio/>}/>
          <Route path={routes.about.path} element={<About/>}/>
          <Route path="/portfolio/collection/:id" element={<Collection/>}/>
          <Route path="/not-found" element={<NotFound/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </ParallaxProvider>
  );
}

export default App;
