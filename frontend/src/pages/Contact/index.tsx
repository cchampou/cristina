import React from 'react';

import './index.css';

import PageLayout from '../../components/PageLayout';
import Title from '../../components/Title';


function Contact() {
  return (
    <PageLayout>
      <Title>Contact</Title>
      <div id="socials">
        <a href="https://www.linkedin.com/in/cristina-c-7357bb18a/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 50 50">
            <path
              d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
          <br/>
          LinkedIn
        </a>
        <a href="mailto:cristina.coellen@gmail.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="48" height="48" viewBox="0 0 100 100">
            <path
              d="m96.875 25c0-2.4883-0.98828-4.8711-2.7461-6.6289-1.7578-1.7578-4.1406-2.7461-6.6289-2.7461h-75c-2.4883 0-4.8711 0.98828-6.6289 2.7461-1.7578 1.7578-2.7461 4.1406-2.7461 6.6289v50c0 2.4883 0.98828 4.8711 2.7461 6.6289 1.7578 1.7578 4.1406 2.7461 6.6289 2.7461h75c2.4883 0 4.8711-0.98828 6.6289-2.7461 1.7578-1.7578 2.7461-4.1406 2.7461-6.6289zm-63.23 21.504-24.27 27.211c-1.1523 1.2812-1.0508 3.2578 0.23047 4.4141 1.2852 1.1523 3.2578 1.0508 4.4141-0.23047l24.395-27.352 1.4922 1.2617c5.8281 4.9297 14.359 4.9297 20.188 0l1.4961-1.2656 24.375 27.082c1.1523 1.2812 3.1328 1.3828 4.4141 0.23047 1.2812-1.1523 1.3867-3.1328 0.23047-4.4141l-24.242-26.941 23.461-19.852c1.3164-1.1172 1.4805-3.0859 0.36719-4.4062-1.1133-1.3164-3.0859-1.4805-4.4023-0.36719l-29.73 25.156c-3.4961 2.9609-8.6172 2.9609-12.113 0l-29.73-25.156c-1.3164-1.1172-3.2891-0.94922-4.4023 0.36719-1.1172 1.3203-0.94922 3.2891 0.36719 4.4062l23.469 19.855z"
              fillRule="evenodd"/>
          </svg>
          <br/>
          Email
        </a>
        <a href="https://www.instagram.com/cristina_reports/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 50 50">
            <path
              d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
          </svg>
          <br/>
          Instagram
        </a>
      </div>
    </PageLayout>
  );
}

export default Contact;