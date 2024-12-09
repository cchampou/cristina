import React, { useEffect } from 'react';

import type {Collection} from '../../services/api';

import './index.css';
import Title from '../Title';

type PresentationProps = {
    collection: Collection;
};

function Presentation({collection}: PresentationProps) {

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('anchor')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  return (
        <section id="anchor" className="presentation-section">
            <Title>{collection?.title}</Title>
            <p id="presentation-summary">{collection?.summary}</p>
        </section>
    );
}

export default Presentation;
