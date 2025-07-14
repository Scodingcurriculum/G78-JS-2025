// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyBwKhMKg0jOKRM4kIPLD1bTsCRwzrWlWFI",
  authDomain: "notes-dc1e9.firebaseapp.com",
  databaseURL: "https://notes-dc1e9-default-rtdb.firebaseio.com",
  projectId: "notes-dc1e9",
  storageBucket: "notes-dc1e9.firebasestorage.app",
  messagingSenderId: "1038385920596",
  appId: "1:1038385920596:web:30b974f9dc36f5fdb8cbc1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");
const addNoteBtn = document.getElementById("addNoteBtn");

// Add note
addNoteBtn.addEventListener("click", () => {
  const text = noteInput.value.trim();
  if (text) {
    const newNoteRef = db.ref("notes").push();
    newNoteRef.set({ text });
    noteInput.value = "";
  }
});

// Fetch notes in realtime
db.ref("notes").on("value", snapshot => {
  notesList.innerHTML = "";
  snapshot.forEach(childSnapshot => {
    const note = childSnapshot.val();
    const li = document.createElement("li");
    li.textContent = note.text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => db.ref("notes/" + childSnapshot.key).remove();

    li.appendChild(delBtn);
    notesList.appendChild(li);
  });
});
