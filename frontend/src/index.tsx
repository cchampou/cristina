import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import Collection from './pages/Collection';

import './global.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No root element found');
}

const root = createRoot(rootElement);

function App() {


  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/collection/:id" element={<Collection />}/>
        <Route path="/not-found" element={<NotFound />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App/>);
