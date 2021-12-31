// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK8NVpnntP0ZoSSqnh2A0Obx4H8C2DtVQ",
  authDomain: "insta-2-yt-e90e9.firebaseapp.com",
  projectId: "insta-2-yt-e90e9",
  storageBucket: "insta-2-yt-e90e9.appspot.com",
  messagingSenderId: "641769327911",
  appId: "1:641769327911:web:a37e5959d6af47482b6d02",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
