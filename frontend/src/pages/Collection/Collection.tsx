import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Collection } from '../../services/api';
import { ApiService } from '../../services/api';
import PhotoGallery from '../../components/PhotoGallery';
import Presentation from '../../components/Presentation';
import Loading, { useLoading } from '../../components/Loading';
import i18n from 'i18next';

type CollectionParams = {
  id: string;
};

function Collection() {
  const { id } = useParams<CollectionParams>();
  const [collection, setCollection] = useState<Collection | null>(null);
  const { startLoading, stopLoading, setError, loadingState } = useLoading();
  const navigate = useNavigate();

  const onNotFoundError = useCallback(() => {
    console.error('Invalid collection id');
    navigate('/not-found', {
      replace: true,
    });
  }, []);

  const refresh = useCallback(() => {
    startLoading();
    if (!id) {
      return onNotFoundError();
    }
    ApiService.fetchCollection(id).then((response) => {
      if (!response.data) {
        return onNotFoundError();
      }
      setCollection(response.data);
      stopLoading();
    }).catch((error) => {
      console.error(error);
      setError();
    });
  }, [id]);

  useEffect(() => {
    refresh();

    i18n.on('languageChanged', refresh);
    return () => {
      i18n.off('languageChanged', refresh);
    }
  }, []);

  if (!collection) return null;

  return (
    <Loading loadingState={loadingState}>
      <Presentation collection={collection} />
      <PhotoGallery photos={collection?.photos || []} />
    </Loading>
  );
}

export default Collection;
