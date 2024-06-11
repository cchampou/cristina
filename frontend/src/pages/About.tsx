import React from 'react';
import portrait from '../assets/images/portrait.jpg';
import './About.css'

function About() {
  return (
    <section id="about">
      <img src={portrait} alt="portrait"/>
      <p>
        D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme
        de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.
      </p>
    </section>
  );
}

export default About;