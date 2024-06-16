import React from 'react';

import './index.css';

function ScrollDown() {

  return <div className="scroll-down">
    <span className="scroll-text">Scroll to explore</span>
    <div className="caret"></div>
    <div className="caret"></div>
    <div className="caret"></div>
  </div>;
}

export default ScrollDown;