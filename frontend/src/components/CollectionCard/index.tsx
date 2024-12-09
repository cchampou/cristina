import React, { memo, MouseEventHandler, useEffect } from 'react';

import { Collection } from '../../services/api';
import { getUploadURL } from '../../utils/uploads';

import './index.css';
import { formatDateWithLocale } from '../../utils/date';

type CollectionCardProps = {
  collection: Collection;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onLoaded?: () => void;
};

function CollectionCard({ collection, onClick, onLoaded }: CollectionCardProps) {
  const { date, location, title } = collection;
  const imageRef = React.useRef<HTMLImageElement>(null);

  const loadHandler = () => {
    onLoaded && onLoaded();
  }

  useEffect(() => {
    const localImageRef = imageRef.current;
    if (imageRef.current) {
      localImageRef?.addEventListener('load', loadHandler);
      localImageRef?.addEventListener('error', loadHandler);
    }

    setTimeout(() => {
        loadHandler();
    }, 1000);

    return () => {
      if (imageRef.current) {
        localImageRef?.removeEventListener('load', loadHandler);
        localImageRef?.removeEventListener('error', loadHandler);
      }
    };
  }, []);

  return <section className="collection-section" onClick={onClick}>
    <div className="collection-image">
      <img
        ref={imageRef}
        src={getUploadURL(collection.photos[0].file.formats.small.url)}
        alt={collection.photos[0].description}
      />
    </div>
    <div className="collection-backdrop"></div>
    <div className="collection-info">
      <span className="collection-text collection-title">{title}</span>
      <span className="collection-text collection-meta">{`${(location ? location + ' ' : '')}${formatDateWithLocale(date)}`}</span>
    </div>
  </section>;
}

export default memo(CollectionCard, (prevProps, nextProps) => {
  return prevProps.collection.id === nextProps.collection.id;
});
