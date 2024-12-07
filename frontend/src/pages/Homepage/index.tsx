import React from 'react';
import './index.css';
import Title from '../../components/Title';
import portrait from '../../assets/images/portrait.webp';
import { NavLink } from 'react-router-dom';
import routes from '../../router';
import { Trans, useTranslation } from 'react-i18next';

function Homepage() {
  const { t } = useTranslation();

  return (
    <>
      <div id="jumbo">
        <Title>Cristina Coellen</Title>
      </div>
      <nav id="CTA">
        <NavLink to={routes.journalism.path}>{t('journalism')}</NavLink>
        <NavLink to={routes.photography.path}>{t('photography')}</NavLink>
      </nav>
      <section id="about">
        <img src={portrait} alt="portrait"/>
        <p>
          <Trans i18nKey="about" components={{
            bold: <strong/>,
            break: <br/>
          }} />
        </p>
      </section>
    </>
);
}

export default Homepage;