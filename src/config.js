import dotenv from 'dotenv';
import config from '12factor-config';

dotenv.config();

export const defaultConfig = config({
  apiHost: {
    env: 'REACT_APP_HOST',
    type: 'string',
    required: true,
    default: 'http://localhost:3000',
  },
  googleApiUrl: {
    env: 'REACT_APP_GOOGLE_API_URL',
    type: 'string',
    required: true,
    default: 'http://localhost:3000',
  },
});

export const firebaseConfig = config({
  apiKey: {
    env: 'REACT_APP_FIREBASE_API_KEY',
    type: 'string',
    required: true,
    default: 'http://localhost:3000',
  },
  authDomain: {
    env: 'REACT_APP_FIREBASE_AUTH_DOMAIN',
    type: 'string',
    required: true,
    default: 'http://localhost:3000',
  },
  databaseURL: {
    env: 'REACT_APP_FIREBASE_DB_URL',
    type: 'string',
    required: true,
    default: 'http://localhost:3000',
  },
  projectId: {
    env: 'REACT_APP_FIREBASE_ID',
    type: 'string',
    required: true,
    default: 'http://localhost:3000',
  },
  storageBucket: {
    env: 'REACT_APP_FIREBASE_STORAGE',
    type: 'string',
    required: true,
    default: 'http://localhost:3000',
  },
  messagingSenderId: {
    env: 'REACT_APP_FIREBASE_MSG_ID',
    type: 'string',
    required: true,
    default: 'http://localhost:3000',
  },
  appId: {
    env: 'REACT_APP_FIREBASE_APP_ID',
    type: 'string',
    required: true,
    default: 'http://localhost:3000',
  },
});
