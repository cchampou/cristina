import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type CollectionParams = {
  id: string;
};

function Collection() {
  const { id } = useParams<CollectionParams>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || parseInt(id, 10) < 2) {
      console.error('Invalid collection id');
      navigate('/not-found', {
        replace: true,
      });
    }
  }, [id]);

  return null;
}

export default Collection;
