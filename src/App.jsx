import withFirebaseAuth from 'react-with-firebase-auth';
import { auth } from 'firebase/app';
import React from 'react';
import { Router } from 'react-router-dom';
import firebaseConfig from './firebase';
import Routers from './routes/Router';
import Layout from './layout/Layout';

import history from './utils/history';


const providers = {
  googleProvider: new auth.GoogleAuthProvider(),
};

const firebaseAppAuth = firebaseConfig.auth();

const App = ({ user, signOut, signInWithGoogle }) => (
  <Router history={history}>
    <Layout>
      <Routers />
    </Layout>
  </Router>
);


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
