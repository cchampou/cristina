import { createRoot } from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import { fetchSeries, StrapiResponse, Serie} from './requests';

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

          </section>
        ))}
      </ul>
    </div>
  );
}

root.render(<App />);
