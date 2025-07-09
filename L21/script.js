
var firebaseConfig = {
  apiKey: "AIzaSyD3z6sVCDKe25Fz2FRtBK9VQbviTV7QJRM",
  authDomain: "bookyourseats-4d990.firebaseapp.com",
  databaseURL: "https://bookyourseats-4d990-default-rtdb.firebaseio.com",
  projectId: "bookyourseats-4d990",
  storageBucket: "bookyourseats-4d990.firebasestorage.app",
  messagingSenderId: "857467135115",
  appId: "1:857467135115:web:885 a65465d9efddf13e08e"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener("DOMContentLoaded", function() {
    const registerBtn = document.getElementById("register-btn");
    const loginBtn = document.getElementById("login-btn");
    
    if (registerBtn) {
        registerBtn.addEventListener("click", function() {
            const user_name= document.getElementById("user-name").value;
            const email = document.getElementById("user-email").value;
            const password = document.getElementById("user-password").value;
            localStorage.setItem("user_name",user_name);
            localStorage.setItem("email",email);

            auth.createUserWithEmailAndPassword(email, password)
                .then(userCredential => {
                    alert("Registration successful! Welcome " + userCredential.user.email);
                    window.location.href = "event_selection.html"; // Redirect to next page
                })
                .catch(error => {
                    alert(error.message);
                });
        });
    }
    
    if (loginBtn) {
        loginBtn.addEventListener("click", function() {
            const user_name= document.getElementById("user-name").value;
            const email = document.getElementById("user-email").value;
            const password = document.getElementById("user-password").value;
            localStorage.setItem("user_name",user_name);
            localStorage.setItem("email",email);
            auth.signInWithEmailAndPassword(email, password)
                .then(userCredential => {
                    alert("Login successful! Welcome back " + userCredential.user.email);
                    window.location.href = "event_selection.html"; // Redirect to next page
                })
                .catch(error => {
                    alert(error.message);
                });
        });
    }
});
