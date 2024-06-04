import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Collection } from '../services/api';
import { ApiService } from '../services/api';
import PhotoGallery from '../components/PhotoGallery';
import Presentation from '../components/Presentation';

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

  const onPhotoSelect = (photoIndex: number) => {
    setSelectedPhotoIndex(photoIndex);
    window.scrollTo(0, 0);
  }

  if (!collection) return null;

  return (<>
      <Presentation collection={collection} selectedPhotoIndex={selectedPhotoIndex} />
      <PhotoGallery photos={collection?.attributes.photos || []} onPhotoSelect={onPhotoSelect} />
    </>
  );
}

export default Collection;
