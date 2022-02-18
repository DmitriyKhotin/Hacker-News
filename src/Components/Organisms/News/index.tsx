import React, { FC } from 'react';

import { INews } from '../../../store/slice/types';
import AuthorName from '../../Atoms/AuthorName';
import PublicDate from '../../Atoms/PublicDate';
import Rate from '../../Atoms/Rate';
import Title from '../../Atoms/Title';
import WrappedFlexContainer from '../../Molecules/WrappedFlexContainer';

import styles from './styles.scss';

const News: FC<INews> = ({ id, title, time, by, score }) => {
  return (
    <div className={styles.news} data-id={id}>
      <WrappedFlexContainer>
        <Title title={title} />
        <Rate score={score} />
      </WrappedFlexContainer>
      <WrappedFlexContainer>
        <AuthorName name={by} />
        <PublicDate time={time} />
      </WrappedFlexContainer>
    </div>
  );
};

export default News;
