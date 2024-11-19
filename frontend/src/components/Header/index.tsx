import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../router';
import './index.css';

type Props = {
  immersive?: boolean
}

function Header({ immersive }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

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

  const backgroundColor = immersive || !isOpen ? 'transparent' : 'white';

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  }

  return <nav id="header" style={{
    position: immersive ? 'absolute' : 'relative',
    color: immersive ? 'white' : 'black',
    textShadow: immersive ? '0 2px 4px gray' : 'none',
    backgroundColor: backgroundColor,
  }}>
    <button onClick={() => setIsOpen(prev => !prev)} style={{ color: immersive ? 'white' : 'black' }}>=</button>
    {isOpen && (<><NavLink to={routes.homepage.path}>{t('home')}</NavLink>
      <NavLink to={routes.photography.path}>{t('photography')}</NavLink>
      <NavLink to={routes.journalism.path}>{t('journalism')}</NavLink>
      <NavLink to={routes.contact.path}>{t('Contact')}</NavLink>
      <a href="#" onClick={toggleLanguage}>🇬🇧/🇫🇷</a>
    </>)}
  </nav>
}

export default Header;