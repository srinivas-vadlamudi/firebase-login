import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXzWEwZJy74xPwl2I7knkubZ0cSLPO9qA",
    authDomain: "user-login-28r.firebaseapp.com",
    projectId: "user-login-28r",
    storageBucket: "user-login-28r.appspot.com",
    messagingSenderId: "308025045592",
    appId: "1:308025045592:web:d0d611d4da3d012523102d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById('logout');
  
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUserId');
        signOut(auth)
          .then(() => {
            console.log('User signed out successfully');
            window.location.href = 'index.html';
          })
          .catch((error) => {
            console.error('Error Signing out:', error);
          });
      });
    } else {
      console.error('Logout button not found!');
    }
  
    // Check Auth State
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log('User is logged out');
      } else {
        console.log('User is logged in:', user);
      }
    });
  });