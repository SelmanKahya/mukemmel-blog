import firebase from '@firebase/app';
import '@firebase/firestore'
import '@firebase/auth'
import '@firebase/storage'
import { FirebaseNamespace } from '@firebase/app-types';
import cf from '../config'
export function loadDB():FirebaseNamespace  {
  try {
    var config = {
      ...cf.firebaseCredentials
    };
    firebase.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase;
}