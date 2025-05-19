// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
let firebaseApp;
let analytics;

if (typeof window !== 'undefined') {
  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
    analytics = getAnalytics(firebaseApp);
  }
}

export { firebaseApp, analytics };
