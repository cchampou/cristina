import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../router';
import './index.css';

type Props = {
  immersive?: boolean
}

function Header({ immersive }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    handleResize();
    const observer = new ResizeObserver(() => {
      handleResize();
    });

    observer.observe(document.body);
  }, []);

  return <nav id="header" style={{
    position: immersive ? 'absolute' : 'relative',
    color: immersive ? 'white' : 'black',
    textShadow: immersive ? '0 2px 4px gray' : 'none',
    backgroundColor: immersive ? 'transparent': 'white',
  }}>
    <button onClick={() => setIsOpen(prev => !prev)} style={{ color: immersive ? 'white' : 'black' }}>=</button>
    {isOpen && (<><NavLink to={routes.homepage.path}>Home</NavLink>
      <NavLink to={routes.photography.path}>Photography</NavLink>
      <NavLink to={routes.journalism.path}>Journalism</NavLink>
      <NavLink to={routes.contact.path}>Contact</NavLink>
    </>)}
  </nav>
}

export default Header;