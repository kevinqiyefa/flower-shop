import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { callAPI } from './services/api';
import { Layout, HomePage, CheckoutPage, NoMatchPage } from './components';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      let path = '?slug=all';

      let [category] = await callAPI('GET', path, false);
      console.log(category);
    };
    fetchData();
  }, []);

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
