import React, { useEffect, useState } from 'react';

import './index.css';
import Title from '../../components/Title';
import ReferenceCard from '../../components/ReferenceCard';
import { ApiService, Reference, ReferenceType } from '../../services/api';
import { useTranslation } from 'react-i18next';
import Loading, { useLoading } from '../../components/Loading';

function Journalism() {
  const { loadingState, startLoading, stopLoading } = useLoading();
  const [references, setReferences] = useState<Reference[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    startLoading();
    ApiService.fetchReferences().then((response) => {
      setReferences(response.data)
      stopLoading();
    });
  }, []);

  return (
    <>
      <Title>{t('journalism')}</Title>
      <h3>{t('video and TV')}</h3>
      <Loading loadingState={loadingState}>
      {references.filter(({ type }) => type === ReferenceType.video)
        .map((props) => <ReferenceCard {...props} key={props.documentId}/>)}
      </Loading>
      <h3>{t('print')}</h3>
      <Loading loadingState={loadingState}>
      {references.filter(({ type }) => type === ReferenceType.print)
        .map(({ ...props }) => <ReferenceCard {...props} key={props.documentId}/>)}
      </Loading>
    </>
  );
}

export default Journalism;