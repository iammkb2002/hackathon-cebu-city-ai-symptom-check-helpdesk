// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  if (typeof window !== 'undefined' && 'indexedDB' in window) {
    firebase.firestore().settings({ cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED });
    firebase.firestore().enablePersistence().catch((err) => console.warn(`Persistence failed: ${err.code}`));
  }
}

const firestore = firebase.firestore();
const auth = firebase.auth();

const getUserRole = async (uid) => (await firestore.collection('users').doc(uid).get()).data().role;

const setUserRole = async (uid, role) => {
  await firestore.collection('users').doc(uid).set({ role }, { merge: true });
};

export { firestore, auth, getUserRole, setUserRole };
