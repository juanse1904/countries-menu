import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../components/Layout';
import countryPage from '../components/CountryPage';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/data/:alpha2Code' component={countryPage} />
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
