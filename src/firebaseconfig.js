// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { auth, db } from "./firebaseConfig";

// Replace these values with your Firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyAcb8B7haUpk2pKmtQQ2LggJ-ePYqDuxEg",
  authDomain: "portfolio-83f93.firebaseapp.com",
  projectId: "portfolio-83f93",
  storageBucket: "portfolio-83f93.firebasestorage.app",
  messagingSenderId: "221577186678",
  appId: "1:221577186678:web:3d17fd7a5cc43e011f3e57",
  measurementId: "G-PCB4ZJV58D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services for use in your app
export const auth = getAuth(app);
export const db = getFirestore(app);