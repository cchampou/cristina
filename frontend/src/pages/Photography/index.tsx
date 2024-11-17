import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CollectionCard from '../../components/CollectionCard';

import { Collection, ApiService } from '../../services/api';
import './styles.css';
import PageLayout from '../../components/PageLayout';
import Title from '../../components/Title';

function Photography() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const navigate = useNavigate();
  const [nbCollectionLoaded, setNbCollectionLoaded] = useState(0);

  useEffect(() => {
    ApiService.fetchCollections().then((response) => {
      setCollections(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <PageLayout>
      <Title>Photography</Title>
      <div id="collection-carousel" style={{
        height: collections.length > 0 && nbCollectionLoaded === collections.length ? 'calc(200px + 1rem)' : '0',
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
