import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

try {
  firebase.initializeApp({
    // apiKey: "AIzaSyCon70IoW9avHRkBWmDTTXR_C9M2UIJ30Q",
    // authDomain: "chat-app-9e116.firebaseapp.com",
    // projectId: "chat-app-9e116",
    // storageBucket: "chat-app-9e116.appspot.com",
    // messagingSenderId: "758679960162",
    // appId: "1:758679960162:web:e382ba0a16ffebf7212f3b",
    // measurementId: "G-6VZF6PMDKD",

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

const fb = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};

export default fb;
