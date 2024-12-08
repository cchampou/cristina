import React, { PropsWithChildren } from 'react';
import Header from '../Header';
import Footer from '../Footer';

import './index.css';

type Props = PropsWithChildren<{
  immersive?: boolean
}>;

function PageLayout({ children, immersive }: Props) {
  return (
    <div id="layout">
      <Header immersive={immersive}/>
      <main data-immersive={!!immersive}>
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default PageLayout;