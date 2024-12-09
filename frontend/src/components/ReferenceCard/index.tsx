import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';

type Props = {
  link?: string;
  title: string;
  media: string;
  date: string;
}

function ReferenceCard({ link, title, media, date }: Props) {
  const { i18n } = useTranslation();

  return (
    <article className="reference-card">
      <a href={link} target="_blank" className="reference-card-title">
        {title}
      </a>
      <br/>
      <span className="reference-card-meta">
        <strong className="reference-card-media">{media}</strong>
        <span className="reference-card-date">{new Date(date).toLocaleDateString(i18n.language)}</span>
      </span>
    </article>
  );
}

export default ReferenceCard;