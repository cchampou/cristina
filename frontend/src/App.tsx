import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import Photography from './pages/Photography';
import NotFound from './pages/NotFound';
import Homepage from "./pages/Homepage";
import Collection from './pages/Collection/Collection';
import Contact from './pages/Contact';
import Journalism from './pages/Journalism';

import routes from './router';
import './global.css';
import PageLayout from './components/PageLayout';

function App() {
  const isHomepage = !!useMatch(routes.homepage.path);

  return (
    <PageLayout immersive={isHomepage}>
      <Routes>
        <Route path={routes.homepage.path} element={<Homepage/>}/>
        <Route path={routes.photography.path} element={<Photography/>}/>
        <Route path={routes.contact.path} element={<Contact/>}/>
        <Route path={routes.journalism.path} element={<Journalism/>}/>
        <Route path="/portfolio/collection/:id" element={<Collection/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </PageLayout>
  );
}

export default App;
