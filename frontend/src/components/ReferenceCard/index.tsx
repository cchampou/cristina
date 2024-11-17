import React from 'react';

type Props = {
  link?: string;
}

function ReferenceCard({ link }: Props) {
  return (
    <p>title, media name, date{link && <>: <a href={link}>Check it out</a></>}</p>
  );
}

export default ReferenceCard;