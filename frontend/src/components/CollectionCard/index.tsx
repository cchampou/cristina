import React, { memo, MouseEventHandler, useEffect } from 'react';

import { Collection } from '../../services/api';
import { getUploadURL } from '../../utils/uploads';

import './index.css';
import { Simulate } from 'react-dom/test-utils';
import load = Simulate.load;

type CollectionCardProps = {
  collection: Collection;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onLoaded?: () => void;
};

function CollectionCard({ collection, onClick, onLoaded }: CollectionCardProps) {

  const imageRef = React.useRef<HTMLImageElement>(null);

  const date = collection.attributes.date ? new Date(collection.attributes.date).toLocaleDateString() : '';

  const loadHandler = () => {
    onLoaded && onLoaded();
  }

  useEffect(() => {
    const localImageRef = imageRef.current;
    if (imageRef.current) {
      localImageRef?.addEventListener('load', loadHandler);
    }
    return () => {
      if (imageRef.current) {
        localImageRef?.removeEventListener('load', loadHandler);
      }
    };
  }, []);

  return <section className="collection-section" onClick={onClick}>
    <div className="collection-image">
      <img
        ref={imageRef}
        src={getUploadURL(collection.attributes.photos[0].file.data.attributes.formats.small.url)}
        alt={collection.attributes.photos[0].caption}
      />
    </div>
    <div className="collection-info">
      <h2>{collection.attributes.title}</h2>
      <h3>{collection.attributes.location} {date}</h3>
    </div>
  </section>;
}

export default memo(CollectionCard, (prevProps, nextProps) => {
  return prevProps.collection.id === nextProps.collection.id;
});
