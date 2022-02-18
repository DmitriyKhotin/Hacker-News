import React, { FC } from 'react';

import styles from './styles.scss';

const RefetchButton: FC<{ dispatch: any }> = ({ dispatch }) => {
  return (
    <button className={styles.refetchButton} onClick={dispatch}>
      Refetch
    </button>
  );
};

export default RefetchButton;
