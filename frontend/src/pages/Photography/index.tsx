import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CollectionCard from '../../components/CollectionCard';

import { Collection, ApiService } from '../../services/api';
import './styles.css';
import PageLayout from '../../components/PageLayout';
import Title from '../../components/Title';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


function Photography() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [nbCollectionLoaded, setNbCollectionLoaded] = useState(0);
  const [hasTimeout, setHasTimeout] = useState(false);

  const refresh = useCallback(() => {
    ApiService.fetchCollections().then((response) => {
      setCollections(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    i18n.on('languageChanged', refresh);
    setTimeout(() => {
      setHasTimeout(true);
    }, 3000);
    refresh();
  }, []);

  return (
    <PageLayout>
      <Title>{t('photography')}</Title>
      <div id="collection-carousel" style={{
        height: collections.length > 0 && nbCollectionLoaded === collections.length || hasTimeout ? '200px' : '0',
      }}>
        {collections.map((collection) => (
          <CollectionCard
            collection={collection}
            key={collection.id}
            onClick={() => navigate(`/portfolio/collection/${collection.documentId}`)}
            onLoaded={() => {
              setNbCollectionLoaded((prev) => prev + 1);
            }}
          />
        ))}
      </div>
    </PageLayout>
  );
}

export default Photography;
