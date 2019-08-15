import * as firebase from 'firebase/app';
import 'firebase/auth';

import config from './config';


const firebaseConfig = {
  apiKey: config.firebaseApiKey,
  authDomain: 'aut0carma.firebaseapp.com',
  databaseURL: 'https://aut0carma.firebaseio.com',
  projectId: 'aut0carma',
  storageBucket: '',
  messagingSenderId: '440635034597',
  appId: '1:440635034597:web:db4c9fb70367006b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp;
