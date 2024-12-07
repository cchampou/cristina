import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Collection } from '../../services/api';
import { ApiService } from '../../services/api';
import PhotoGallery from '../../components/PhotoGallery';
import Presentation from '../../components/Presentation';

type CollectionParams = {
  id: string;
};

function Collection() {
  const { id } = useParams<CollectionParams>();
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

    ApiService.fetchCollection(id).then((response) => {
      setCollection(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, [id]);

  if (!collection) return null;

  return (<>
      <Presentation collection={collection} />
      <PhotoGallery photos={collection?.photos || []} />
    </>
  );
}

export default Collection;
