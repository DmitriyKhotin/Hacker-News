import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import ErrorBoundary from '../../Components/ErrorBoundary';
import './styles.scss';
import CenterLoader from '../../Components/Molecules/CenterLoader';

const LoadableMainPage = Loadable({
  loader: () => import('../../Pages/MainPage'),
  loading() {
    return <CenterLoader />;
  },
});

const LoadableNewsPage = Loadable({
  loader: () => import('../../Pages/NewsPage'),
  loading() {
    return <CenterLoader />;
  },
});

const Entry: FC = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoadableMainPage} />
        <Route path="/news/:id" exact component={LoadableNewsPage} />
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  </ErrorBoundary>
);

export default Entry;
