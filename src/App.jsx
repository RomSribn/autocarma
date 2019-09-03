import React from 'react';
import { Router } from 'react-router-dom';
import { FirebaseAuthProvider, FirebaseAuthConsumer } from '@react-firebase/auth';
import { firebaseConfig } from 'config';
import * as firebase from 'firebase/app';
import Routers from 'routes/Router';
import Layout from 'layout';
import history from 'utils/history';

const App = () => (
  <FirebaseAuthProvider config={firebaseConfig} firebase={firebase}>
    <FirebaseAuthConsumer>
      {({ user }) => (
        <Router history={history}>
          <Layout user={user}>
            <Routers user={user} />
          </Layout>
        </Router>
      )}
    </FirebaseAuthConsumer>
  </FirebaseAuthProvider>
);

export default App;
