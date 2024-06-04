import React from 'react';
import { useParams } from 'react-router-dom';

type CollectionParams = {
  id: string;
};


function Collection() {
  const { id } = useParams<CollectionParams>();

  return null;
}

export default Collection;
