import React, { FC } from 'react';

import RefetchButton from '../../Atoms/RefetchButton';

const RefetchDisplay: FC<{ dispatch: any }> = ({ dispatch }) => {
  return (
    <div>
      <RefetchButton dispatch={dispatch} />
      <div></div>
    </div>
  );
};

export default RefetchDisplay;
