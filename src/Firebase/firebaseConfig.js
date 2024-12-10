// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: 'AIzaSyAphI3F5qE2K9nzXn8_osQqeJkDOTUlhlw',
  authDomain: 'malificious-256af.firebaseapp.com',
  projectId: 'malificious-256af',
  storageBucket: 'malificious-256af.appspot.com',
  messagingSenderId: '319529273497',
  appId: '1:319529273497:web:70a7774186ba595a0f5008',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
