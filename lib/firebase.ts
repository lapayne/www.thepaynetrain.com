// src/lib/firebase.ts
import { initializeApp, FirebaseApp } from "firebase/app";

// 1. Firebase Configuration (Get this from your Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDWvSubEvb39pnWl5_wIPIOJBlIdWd9KrY",
  authDomain: "thepaynetrain-com.firebaseapp.com",
  projectId: "thepaynetrain-com",
  storageBucket: "thepaynetrain-com.firebasestorage.app",
  messagingSenderId: "4717102951",
  appId: "1:4717102951:web:6d6ea90f877005609611c2",
  measurementId: "G-3EF4D89YQ1",
};

// Use type union to allow initialization or null/undefined before check
let app: FirebaseApp | null = null;

export { app };
