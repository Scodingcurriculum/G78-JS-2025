  // Firebase config (replace with yours)
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  function loginUser() {
    const email = document.querySelector("#loginForm input[type='email']").value;
    const password = document.querySelector("#loginForm input[type='password']").value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Login successful!");
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  }

  function signupUser() {
    const email = document.querySelector("#signupForm input[type='email']").value;
    const password = document.querySelector("#signupForm input[type='password']").value;

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Signup successful!");
      })
      .catch((error) => {
        alert("Signup failed: " + error.message);
      });
  }

function showForm(form) {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginTab = document.getElementById("loginTab");
    const signupTab = document.getElementById("signupTab");

    if (form === "login") {
      loginForm.classList.add("active");
      signupForm.classList.remove("active");
      loginTab.classList.add("active");
      signupTab.classList.remove("active");
    } else {
      loginForm.classList.remove("active");
      signupForm.classList.add("active");
      loginTab.classList.remove("active");
      signupTab.classList.add("active");
    }
  }