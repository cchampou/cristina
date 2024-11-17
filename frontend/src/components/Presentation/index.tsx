import React, { useEffect } from 'react';

import type {Collection} from '../../services/api';

import './index.css';

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
            <h1>{collection?.title}</h1>
            <p id="presentation-summary">{collection?.summary}</p>
        </section>
    );
}

export default Presentation;
