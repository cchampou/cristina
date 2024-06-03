import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './global-styles.css';
import Homepage from './pages/Homepage';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No root element found');
}

const root = createRoot(rootElement);

function App() {


  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App/>);
