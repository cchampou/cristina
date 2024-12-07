import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Photography from './pages/Photography';
import NotFound from './pages/NotFound';
import Homepage from "./pages/Homepage";
import Collection from './pages/Collection/Collection';
import Contact from './pages/Contact';
import Journalism from './pages/Journalism';

import routes from './router';
import './global.css';

function App() {

  return (
    <Routes>
      <Route path={routes.homepage.path} element={<Homepage/>}/>
      <Route path={routes.photography.path} element={<Photography/>}/>
      <Route path={routes.contact.path} element={<Contact/>}/>
      <Route path={routes.journalism.path} element={<Journalism/>}/>
      <Route path="/portfolio/collection/:id" element={<Collection/>}/>
      <Route path="/not-found" element={<NotFound/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
