import firebase from 'firebase/app'
import 'firebase/firestore'

export function loadFirebase() {
  try {
    // Initialize Firebase
    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATA_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
  } catch (error) {
    if (!/already exists/.test(error.message)) {
      console.log(`Firebase didn't initialize correctly: ${error.message}`)
    }
  }
  return firebase
}