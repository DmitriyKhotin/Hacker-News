import React, { FC } from 'react';

import { INews } from '../../../store/slice/types';
import News from '../News';

import styles from './styles.scss';

const CustomComment: FC<INews> = (props) => {
  return (
    <div className={styles.comment}>
      <News {...props} />
      <p className={styles.comment__nestedComments}>
        Показать следующие комментарии
      </p>
    </div>
  );
};

export default CustomComment;
