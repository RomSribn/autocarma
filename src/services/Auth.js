import { auth } from 'firebase/app';
import { database } from 'firebase';
import firebaseApp from 'firebase.js';

export const providers = {
  googleProvider: new auth.GoogleAuthProvider(),
};

export const firebaseAppAuth = firebaseApp.auth();
