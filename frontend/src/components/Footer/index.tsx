import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Footer() {
  return (
    <footer>
      <p>Copyright © Cristina Coellen 2024</p>
      <Link to="#">Legal</Link>
      <Link to="#">Privacy policy</Link>
    </footer>
  );
}

export default Footer;