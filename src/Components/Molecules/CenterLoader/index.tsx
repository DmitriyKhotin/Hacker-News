import React, { FC } from 'react';

import Loader from '../../Atoms/Loader';

import styles from './styles.scss';

const CenterLoader: FC = () => {
  return (
    <div className={styles.center}>
      <Loader />
    </div>
  );
};

export default CenterLoader;
