import { auth } from 'firebase/app';
import firebaseApp from 'firebase.js';

export const providers = {
  googleProvider: new auth.GoogleAuthProvider(),
};

export const firebaseAppAuth = firebaseApp.auth();
