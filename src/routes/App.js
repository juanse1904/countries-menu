import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../components/Layout';
import Expand from '../components/Expand';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/data' component={Expand} />
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
