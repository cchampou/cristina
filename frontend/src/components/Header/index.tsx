import React, { MouseEventHandler, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../router';
import './index.css';
import { supportedLocales } from '../../../app.config';

type Props = {
  immersive?: boolean
}

const isDesktop = () => window.innerWidth > 768;

function Header({ immersive }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const handleResize = () => {
    if (isDesktop() && !isOpen) {
      setIsOpen(true);
    }
    if (isOpen && !isDesktop()) {
      setIsOpen(false);
    }
  }

  const handleClick = () => {
    if (isOpen && !isDesktop()) setIsOpen(false);
  }

  useEffect(() => {
    handleResize();
    const observer = new ResizeObserver(() => {
      handleResize();
    });

    observer.observe(document.body);
  }, []);

  const toggleLanguage: MouseEventHandler = (e) => {
    e.preventDefault();
    const nextLocale = supportedLocales.find(locale => locale !== i18n.language);
    i18n.changeLanguage(nextLocale);
  }

  return <header data-immersive={immersive}>
    <nav id="header" data-immersive={immersive} data-open={isOpen} onClick={handleClick}>
      <button id="burger" onClick={() => setIsOpen(prev => !prev)} style={{ color: immersive ? 'white' : 'black' }}>=
      </button>
      {isOpen && (<><NavLink to={routes.homepage.path}>{t('home')}</NavLink>
        <NavLink to={routes.photography.path}>{t('photography')}</NavLink>
        <NavLink to={routes.journalism.path}>{t('journalism')}</NavLink>
        <NavLink to={routes.contact.path}>{t('Contact')}</NavLink>
        <a href="" onClick={toggleLanguage}>🇬🇧🇫🇷</a>
      </>)}
    </nav>
  </header>;
}

export default Header;