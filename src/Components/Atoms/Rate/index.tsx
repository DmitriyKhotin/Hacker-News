import React, { FC } from 'react';

const Rate: FC<{ score: number }> = ({ score }) => {
  return (
    <p>
      rate: <b>{score}</b>
    </p>
  );
};

export default Rate;
