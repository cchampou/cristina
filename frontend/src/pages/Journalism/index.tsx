import React, { useEffect, useState } from 'react';

import './index.css';
import PageLayout from '../../components/PageLayout';
import Title from '../../components/Title';
import ReferenceCard from '../../components/ReferenceCard';
import { ApiService, Reference, ReferenceType } from '../../services/api';

function Journalism() {
  const [references, setReferences] = useState<Reference[]>([]);

  useEffect(() => {
    ApiService.fetchReferences().then((response) => {
      setReferences(response.data)
    });
  }, []);

  return (
    <PageLayout>
      <Title>Journalism</Title>
      <h3>Video and TV</h3>
      {references.filter(({ type }) => type === ReferenceType.video)
        .map((props) => <ReferenceCard {...props} key={props.documentId}/>)}
      <h3>Print</h3>
      {references.filter(({ type }) => type === ReferenceType.print)
        .map(({ ...props }) => <ReferenceCard {...props} key={props.documentId} />)}
    </PageLayout>
  );
}

export default Journalism;