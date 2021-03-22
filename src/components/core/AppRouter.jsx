import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import IndexPage from '@/pages/IndexPage';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" component={IndexPage} exact={true} />;
    </Switch>
  );
};

export default AppRouter;
