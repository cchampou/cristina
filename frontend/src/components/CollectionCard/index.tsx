import React, { MouseEventHandler } from 'react';

import { Collection } from '../../services/api';
import { getUploadURL } from '../../utils/uploads';

import './index.css';

type CollectionCardProps = {
  collection: Collection;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

function CollectionCard({ collection, onClick }: CollectionCardProps) {

  return <section className="collection-section" onClick={onClick}>
    <div className="collection-image">
      <img
        src={getUploadURL(collection.attributes.photos[0].file.data.attributes.formats.small.url)}
        alt={collection.attributes.photos[0].caption}
      />
    </div>
    <div className="collection-info">
      <h2>{collection.attributes.title}</h2>
      <p>{collection.attributes.summary}</p>
    </div>
  </section>;
}

export default CollectionCard;
