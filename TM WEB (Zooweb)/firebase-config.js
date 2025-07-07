// firebase-config.js
// Replace these values with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCpM2oIMfyhdqTuG4nEAxK1jRi1ASogjW4",
  authDomain: "zooweb-cfb04.firebaseapp.com",
  projectId: "zooweb-cfb04",
  storageBucket: "zooweb-cfb04.firebasestorage.app",
  messagingSenderId: "555414228975",
  appId: "1:555414228975:web:2d230a6b33d4853da7701a",
  measurementId: "G-WM2PNVVWKP"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore(); 