import React from 'react';

import type {Collection} from '../../services/api';

import './index.css';

type PresentationProps = {
    collection: Collection;
};

function Presentation({collection}: PresentationProps) {
    return (
        <section className="presentation-section">
            <h1>{collection?.title}</h1>
            <p id="presentation-summary">{collection?.summary}</p>
        </section>
    );
}

export default Presentation;
