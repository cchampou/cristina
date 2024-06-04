import React, { useMemo } from 'react';

import type { Collection } from '../../services/api';
import { getUploadURL } from '../../utils/uploads';

import './index.css';

type PresentationProps = {
  collection: Collection;
  selectedPhotoIndex: number;
};

function Presentation({ collection, selectedPhotoIndex }: PresentationProps) {

  const currentPhoto = useMemo(() => collection?.attributes.photos[selectedPhotoIndex],
    [collection, selectedPhotoIndex]);

  const currentPhotoUrl = useMemo(() => currentPhoto ?
      getUploadURL(currentPhoto.file.data.attributes.formats.large.url) : undefined,
    [currentPhoto]);

  const currentPhotoCaption = useMemo(
    () => currentPhoto ? currentPhoto.caption : undefined
    , [currentPhoto]);

  const currentPhotoDescription = useMemo(
    () => currentPhoto ? currentPhoto.description : undefined
    , [currentPhoto]);

  return (
    <section className="presentation-section">
      <h1>{collection?.attributes.title}</h1>
      <p>{collection?.attributes.summary}</p>
      <div className="presentation-current-photo">
        <img src={currentPhotoUrl} alt={currentPhotoCaption}/>
        <div>
          <h2>{currentPhotoCaption}</h2>
          <hr />
          <p>{currentPhotoDescription}</p>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
