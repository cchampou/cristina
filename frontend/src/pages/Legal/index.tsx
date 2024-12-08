import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import SubTitle from '../../components/SubTitle';
import './index.css';

function Legal() {
  const { t } = useTranslation();

  return (
    <>
      <h1>Legal</h1>
      <SubTitle>{t('editorAndPublisher.title')}</SubTitle>
      <p>
        <Trans i18nKey="editorAndPublisher.content" components={{
          br: <br/>,
        }} />
      </p>
      <SubTitle>{t('dev.title')}</SubTitle>
      <p>
        <Trans i18nKey="dev.content" components={{
          br: <br/>,
          GHLink: <a href="https://github.com/cchampou/cristina"/>,
        }}>
          <a href="http://github.com/cchampou/cristinacoellen">GitHub</a>
        </Trans>
      </p>
      <SubTitle>{t('hosting.title')}</SubTitle>
      <p>
        <Trans i18nKey="hosting.content" components={{
          br: <br/>,
        }}/>
      </p>
      <SubTitle>{t('property.title')}</SubTitle>
      <p>
        <Trans i18nKey="property.content" />
      </p>
      <SubTitle>{t('cookies.title')}</SubTitle>
      <p>
        <Trans i18nKey="cookies.content" />
      </p>
    </>
  );
}

export default Legal;