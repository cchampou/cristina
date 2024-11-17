import React from 'react';

type Props = {
  link?: string;
  title: string;
  media: string;
  date: string;
}

function ReferenceCard({ link, title, media, date }: Props) {
  return (
    <>
      <a href={link} target="_blank">
        {title},&nbsp;
        {media},&nbsp;
        {date}
      </a>
      <br/>
    </>
  );
}

export default ReferenceCard;