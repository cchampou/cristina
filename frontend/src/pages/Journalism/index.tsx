import React, { useEffect, useState } from 'react';

import './index.css';
import PageLayout from '../../components/PageLayout';
import Title from '../../components/Title';
import ReferenceCard from '../../components/ReferenceCard';
import { Reference, ReferenceType } from '../../services/api';

const sampleReference: Reference = {
  link: 'https://nouvelobs.com/',
  type: ReferenceType.video
}

function Journalism() {
  const [references, setReferences] = useState<Reference[]>([]);

  useEffect(() => {
    setReferences(Array(3).fill(sampleReference).concat(Array(3).fill({
      ...sampleReference,
      link: "https://euronews.com",
      type: ReferenceType.print
    })));
  }, []);

  return (
    <PageLayout>
      <Title>Journalism</Title>
      <h3>Video and TV</h3>
      {references.filter(({ type }) => type === ReferenceType.video)
        .map(({ link }) => <ReferenceCard link={link}/>)}
      <h3>Print</h3>
      {references.filter(({ type }) => type === ReferenceType.print)
        .map(({ link }) => <ReferenceCard link={link}/>)}
    </PageLayout>
  );
}

export default Journalism;