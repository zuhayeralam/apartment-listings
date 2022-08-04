// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDeqFCOqFBSxNDHO1LZbSoCGGFkD8vwz3M',
  authDomain: 'apartment-listings-app.firebaseapp.com',
  projectId: 'apartment-listings-app',
  storageBucket: 'apartment-listings-app.appspot.com',
  messagingSenderId: '359367755603',
  appId: '1:359367755603:web:4089c4147e3a5fa9a783a6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
