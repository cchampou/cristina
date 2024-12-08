import React from 'react';

import './index.css';

type Props = {
  children: string;
}

function Title({ children }: Props) {
  return (
    <h1>{children}</h1>
  );
}

export default Title;