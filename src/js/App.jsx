import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout, HomePage, CheckoutPage, NoMatchPage } from './components';

const App = () => {
  let routes = (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route component={NoMatchPage} />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default App;
