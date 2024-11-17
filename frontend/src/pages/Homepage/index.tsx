import React from 'react';
import './index.css';
import PageLayout from '../../components/PageLayout';
import Title from '../../components/Title';
import portrait from '../../assets/images/portrait.jpg';
import { NavLink } from 'react-router-dom';
import routes from '../../router';

function Homepage() {
  return (
    <PageLayout immersive>
      <div id="jumbo">
        <Title>Cristina Coellen</Title>
      </div>
      <nav id="CTA">
        <NavLink to={routes.journalism.path}>Journalism</NavLink>
        <NavLink to={routes.photography.path}>Photography</NavLink>
      </nav>
      <section id="about">
        <img src={portrait} alt="portrait"/>
        <p>
          Originally from Austria, Cristina Coellen is a multimedia journalist with a lot of love for all things video.
          She has graduated from&nbsp;<strong>Durham University (UK)</strong> with an undergraduate degree in French and
          History and from&nbsp;
          <strong>Sciences Po Paris</strong> with a Master’s in Journalism and International Security.
          <br/><br/>
          During her journalistic training, she notably worked for the German newspaper&nbsp;<strong>Frankfurter
          Allgemeine Zeitung</strong>,
          the video department of the French magazine&nbsp;<strong>Le Nouvel Obs</strong> and the evening news show of
          Franco-German TV
          channel&nbsp;<strong>ARTE</strong>.
          <br/><br/>
          She has also freelanced for a variety of media, among which&nbsp;<strong>Slate</strong>,&nbsp;<strong>New
          Eastern Europe Magazine</strong>,&nbsp;<strong>Vorarlberger
          Nachrichten</strong> and&nbsp;<strong>Are We Europe</strong>.
          <br/><br/>
          She is currently working at&nbsp;<strong>Euronews</strong> as a digital video producer.
        </p>
      </section>
    </PageLayout>
  );
}

export default Homepage;