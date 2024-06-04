import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Collection } from '../services/api';
import { ApiService } from '../services/api';
import { getUploadURL } from '../utils/uploads';
import PhotoGallery from '../components/PhotoGallery';

type CollectionParams = {
  id: string;
};

function Collection() {
  const { id } = useParams<CollectionParams>();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [collection, setCollection] = useState<Collection | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      console.error('Invalid collection id');
      navigate('/not-found', {
        replace: true,
      });
      return;
    }

    ApiService.fetchCollection(parseInt(id, 10)).then((response) => {
      setCollection(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, [id]);

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

  return (<>
      <section>
        <h1>{collection?.attributes.title}</h1>
        <p>{collection?.attributes.summary}</p>
        <img src={currentPhotoUrl} alt={currentPhotoCaption}/>
        <p>{currentPhotoCaption}</p>
        <p>{currentPhotoDescription}</p>
      </section>
      <PhotoGallery photos={collection?.attributes.photos || []} onPhotoSelect={setSelectedPhotoIndex} />
    </>
  );
}

export default Collection;
