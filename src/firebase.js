import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_xVIu3i01AGMGN78kVv_-k8gKjzVFt5s",
  authDomain: "rehouse-realtors.firebaseapp.com",
  projectId: "rehouse-realtors",
  storageBucket: "rehouse-realtors.firebasestorage.app",
  messagingSenderId: "405008481466",
  appId: "1:405008481466:web:d0c61b0998df9b60c95683",
  measurementId: "G-B7NDM49E6Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;