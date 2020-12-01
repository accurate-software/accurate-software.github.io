import React from 'react';

interface IlabelCard {
  keyLabel: string;
  contentLabel: string | number;
}

const Label: React.FC<IlabelCard> = ({ keyLabel, contentLabel }) => (
  <span>
    <b>{keyLabel}</b> {contentLabel}
  </span>
);

export default Label;
