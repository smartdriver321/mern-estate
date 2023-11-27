// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-6d882.firebaseapp.com',
  projectId: 'mern-estate-6d882',
  storageBucket: 'mern-estate-6d882.appspot.com',
  messagingSenderId: '1022273409109',
  appId: '1:1022273409109:web:7229687f830b3f382944dc',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
