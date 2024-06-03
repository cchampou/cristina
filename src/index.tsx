import { createRoot } from 'react-dom/client';
import React from 'react';


const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <div>
      <h1>Portfolio</h1>
    </div>
  );
}

root.render(<App />);
