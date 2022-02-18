import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import News from '../../Components/Organisms/News';
import { getNewestItems } from '../../store/api';
import { useNewsSelector } from '../../store/hooks';
import { getIdByDataAttribute } from '../../utils/getDataIdAttribute';
import TemplateHOC from '../TemplateHoc';

import styles from './styles.scss';

const MainPage: FC = () => {
  const news = useNewsSelector((state) => state.news);

  const history = useHistory();

  return (
    <div
      className={styles.mainPage__newsContainer}
      onClick={(event) => history.push(`/news/${getIdByDataAttribute(event)}`)}
    >
      {news.map((innerNews) => (
        <News key={innerNews.id} {...innerNews} />
      ))}
    </div>
  );
};

const MainPageWrapped = TemplateHOC(MainPage, getNewestItems);

export default MainPageWrapped;
