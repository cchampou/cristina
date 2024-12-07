import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './index.css';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <p>Copyright © Cristina Coellen 2024</p>
      <Link to="#">{t('legal notice')}</Link>
      <Link to="#">{t('privacy policy')}</Link>
    </footer>
  );
}

export default Footer;