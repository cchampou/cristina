import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CollectionCard from '../../components/CollectionCard';

import { ApiService, Collection } from '../../services/api';
import './styles.css';
import Title from '../../components/Title';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Loading, { useLoading } from '../../components/Loading';


function Photography() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [nbImageLoaded, setNbImageLoaded] = useState(-1);
  const { loadingState, startLoading, setError, stopLoading } = useLoading();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const refresh = useCallback(() => {
    setNbImageLoaded(-1);
    startLoading();
    ApiService.fetchCollections().then(async (response) => {
      setCollections(response.data);
      setNbImageLoaded(0);
    }).catch((error) => {
      setError();
      console.error(error);
    });
  }, []);

  useEffect(() => {
    i18n.on('languageChanged', refresh);
    refresh();
    return () => {
      i18n.off('languageChanged', refresh);
    };
  }, []);

  useEffect(() => {
    if (nbImageLoaded === collections.length) {
      stopLoading();
    }
  }, [nbImageLoaded]);

  return (
    <>
      <Title>{t('photography')}</Title>
      <Loading loadingState={loadingState}>
        <div id="collection-carousel">
          {collections.map((collection) => (
            <CollectionCard
              onLoaded={() => {
                setNbImageLoaded(prev => prev + 1);
              }}
              collection={collection}
              key={collection.id}
              onClick={() => navigate(`/portfolio/collection/${collection.documentId}`)}
            />
          ))}
        </div>
      </Loading>
    </>
  );
}

export default Photography;
