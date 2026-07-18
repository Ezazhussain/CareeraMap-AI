import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCQdAlzzU5QANZtRxNgR8uWG5SjUDjR5wA",
    authDomain: "careermap-ai-c4fdf.firebaseapp.com",
    projectId: "careermap-ai-c4fdf",
    storageBucket: "careermap-ai-c4fdf.firebasestorage.app",
    messagingSenderId: "215602395142",
    appId: "1:215602395142:web:4f11406d0308bfa200eb87",
    measurementId: "G-8K659VLHSH"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };