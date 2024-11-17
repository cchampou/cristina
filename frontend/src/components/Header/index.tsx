import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../router';
import './index.css';

type Props = {
  immersive?: boolean
}

function Header({ immersive }: Props) {

  return <nav id="header" style={{
    position: immersive ? 'absolute' : 'relative',
    color: immersive ? 'white' : 'black',
    textShadow: immersive ? '0 2px 4px gray' : 'none',
  }}>
    <NavLink to={routes.homepage.path}>Home</NavLink>
    <NavLink to={routes.photography.path}>Photography</NavLink>
    <NavLink to={routes.journalism.path}>Journalism</NavLink>
    <NavLink to={routes.contact.path}>Contact</NavLink>
  </nav>
}

export default Header;