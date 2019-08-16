import React from 'react';
import { Router } from 'react-router-dom';
import Routers from 'routes/Router';
import Layout from 'layout/Layout';
import history from 'utils/history';

const App = () => (
  <Router history={history}>
    <Layout>
      <Routers />
    </Layout>
  </Router>
);

export default App;
