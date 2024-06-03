import { createRoot } from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import { fetchSeries, Serie, Photo } from './requests';
import { getUploadURL } from './utils/uploads';

import "./global-styles.css";

const root = createRoot(document.getElementById('root'));

function App() {
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    fetchSeries().then((response) => {
      setSeries(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);


  console.log(series);
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {series.map((serie) => (
          <section key={serie.id}>
            <h2>{serie.attributes.title}</h2>
            {serie.attributes.photo.map((photo: Photo) => (
              <img key={photo.id} src={getUploadURL(photo.file.data.attributes.formats.small.url)} alt={photo.caption} />
            ))}
          </section>
        ))}
      </ul>
    </div>
  );
}

root.render(<App />);
