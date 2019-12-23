import firebase from '@firebase/app';
import '@firebase/firestore'
import '@firebase/auth'
import { FirebaseNamespace } from '@firebase/app-types';

export function loadDB():FirebaseNamespace  {
  try {
    var config = {
      apiKey: "AIzaSyC0Fn_mkWBno0Ow99k1KgphUKISKg5ww9k",
      authDomain: "",
      databaseURL: "",
      projectId: "mukemmelim-ya",
      storageBucket: "",
      messagingSenderId: ""
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