import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import AuthorName from '../../Components/Atoms/AuthorName';
import PublicDate from '../../Components/Atoms/PublicDate';
import Title from '../../Components/Atoms/Title';
import CenterLoader from '../../Components/Molecules/CenterLoader';
import WrappedFlexContainer from '../../Components/Molecules/WrappedFlexContainer';
import { getItemById } from '../../store/api';
import { useNewsSelector } from '../../store/hooks';
import { debugLog } from '../../utils/debugLog';
import TemplateHOC from '../TemplateHoc';

import styles from './styles.scss';

const NewsPage: FC = () => {
  const currentNews = useNewsSelector((state) => state.currentNews);
  debugLog(currentNews);
  if (!currentNews) {
    return <CenterLoader />;
  }

  const { title, time, url, by, descendants } = currentNews;
  debugLog(url);
  return (
    <div className={styles.newsPage}>
      <div className={styles.newsPage__news}>
        <WrappedFlexContainer>
          <Title title={title} />
          <div> Comments: {descendants} </div>
        </WrappedFlexContainer>
        <WrappedFlexContainer>
          <AuthorName name={by} />
          <PublicDate time={time} />
        </WrappedFlexContainer>
        <NavLink
          className={styles.newsPage__link}
          to={{ pathname: url }}
          target="_blank"
        >
          Go to news
        </NavLink>
      </div>
    </div>
  );
};

const NewsPageWrapped = TemplateHOC(NewsPage, (id: string) =>
  getItemById(Number(id))
);

export default NewsPageWrapped;
