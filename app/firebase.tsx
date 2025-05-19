// utils/firebase.ts
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, FirebaseAnalytics, logEvent } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWvSubEvb39pnWl5_wIPIOJBlIdWd9KrY",
  authDomain: "thepaynetrain-com.firebaseapp.com",
  projectId: "thepaynetrain-com",
  storageBucket: "thepaynetrain-com.firebasestorage.app",
  messagingSenderId: "4717102951",
  appId: "1:4717102951:web:be76c18c952fd9ec9611c2",
  measurementId: "G-3EF4D89YQ1"
};

let firebaseApp: FirebaseApp | null = null;
let analytics: FirebaseAnalytics | null = null;

if (typeof window !== 'undefined') {
  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
    analytics = getAnalytics(firebaseApp);
  }
}

export { firebaseApp, analytics, logEvent };
