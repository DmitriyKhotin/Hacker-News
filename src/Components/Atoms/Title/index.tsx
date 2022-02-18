import React, { FC } from 'react';

import styles from './styles.scss';

const Title: FC<{ title: string }> = ({ title }) => {
  return <h4 className={styles.title}>{title}</h4>;
};

export default Title;
