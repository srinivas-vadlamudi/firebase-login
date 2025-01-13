import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

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

// Show message function
function showMessage(message) {
  const messageDiv = document.getElementById("successDiv");
  if (messageDiv) {
    messageDiv.style.display = "block";
    messageDiv.textContent = message;
    messageDiv.style.opacity = 1;

    setTimeout(() => {
      messageDiv.style.opacity = 0;
      messageDiv.style.display = "none";
    }, 5000);
  }
}

// Sign-up logic (Register Page)
const signUpButton = document.getElementById("signUp");
if (signUpButton) {
  signUpButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), { email });

      showMessage("Account Created Successfully!");

      setTimeout(() => {
        window.location.href = "signIn.html";
      }, 2000);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        showMessage("Email Address Already Exists!");
      } else {
        console.error("Error creating user:", error);
        showMessage("Unable to create user. Please try again.");
      }
    }
  });
}

// Sign-in logic (Sign-In Page)
const signInButton = document.getElementById("userSignin");
if (signInButton) {
  signInButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const email = document.getElementById("signinEmail").value;
    const password = document.getElementById("signinPassword").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem("loggedInUserId", user.uid);

      showMessage("Login successful! Redirecting...");

      setTimeout(() => {
        window.location.href = "products.html";
      }, 2000);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        showMessage("Account does not exist. Please sign up first.");
      } else if (error.code === "auth/wrong-password") {
        showMessage("Unable to sign in. Please try again later.");
      } else {
        console.error("Error signing in:", error);
        showMessage("Incorrect email or password. Please try again.");
        
      }
    }
  });
}
