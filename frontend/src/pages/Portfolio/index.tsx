import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Parallax} from "react-scroll-parallax";
import CollectionCard from '../../components/CollectionCard';

import {Collection, ApiService} from '../../services/api';
import './styles.css';
import ScrollDown from "../../components/ScrollDown";

function Portfolio() {
  const background = useRef(null);
  const [collections, setCollections] = useState<Collection[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    ApiService.fetchCollections().then((response) => {
      setCollections(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <>
      <div id="portfolio-jumbotron" ref={background}>
        <Parallax speed={-5} targetElement={background.current ?? undefined}>
          <h1>Portfolio</h1>
        </Parallax>
        <Parallax speed={2} targetElement={background.current ?? undefined}>
          <h2>Cristina Coellen</h2>
        </Parallax>
        <ScrollDown />
      </div>
      {collections.map((collection) => (
        <CollectionCard
          collection={collection}
          key={collection.id}
          onClick={() => navigate(`/portfolio/collection/${collection.id}`)}
        />
      ))}
    </>
  );
}

export default Portfolio;
