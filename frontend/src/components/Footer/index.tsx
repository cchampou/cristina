import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './index.css';

function getVersion(): string | undefined {
  return import.meta.env.VITE_VERSION;
}

function Footer() {
  const { t } = useTranslation();
  const version = useMemo(getVersion, []);
  return (
    <footer>
      <p>Copyright © Cristina Coellen 2024</p>
      {version ? <p>{version}</p> : null}
      <Link to="/legal">{t('legal notice')}</Link>
    </footer>
  );
}

export default Footer;