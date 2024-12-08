import React from 'react';

import './index.css';

type Props = {
  children: string;
}

function SubTitle({ children }: Props) {
  return (
    <h2>{children}</h2>
  );
}

export default SubTitle;