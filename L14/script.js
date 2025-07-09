
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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
      
    });
  