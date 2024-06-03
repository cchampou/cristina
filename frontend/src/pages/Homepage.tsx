import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CollectionCard from '../components/CollectionCard';
import { Collection, fetchCollections } from '../services/api';

function Homepage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCollections().then((response) => {
      setCollections(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <>
      <h1>Portfolio</h1>
      <ul>
        {collections.map((collection) => (
          <CollectionCard collection={collection} key={collection.id}
                          onClick={() => navigate(`/collection/${collection.id}`)}/>
        ))}
      </ul>
    </>
  );
}

export default Homepage;
