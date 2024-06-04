import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Collection } from '../services/api';
import { ApiService } from '../services/api';

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

    ApiService.fetchCollection(parseInt(id, 10)).then((response) => {
      setCollection(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, [id]);

  console.log(collection);
  return null;
}

export default Collection;
