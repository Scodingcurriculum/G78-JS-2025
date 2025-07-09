// Event Selection Page - Handles Movie and Seat Selection with Firebase

// Firebase configuration
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
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

  
const seatContainer = document.getElementById("seat-container");
const totalSeats = 20;
let selectedSeats = [];
const pricePerSeat = 20;

const movieSelect = document.getElementById("movie");
const timeSelect = document.getElementById("time");
const dateSelect=document.getElementById("date");

   
    // Create seats
    function createSeats() {
      seatContainer.innerHTML = "";
      selectedSeats = [];
      for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement("button");
        seat.id = `seat-${i}`;
        seat.innerText = i;
        seat.classList.add("seat");
        seat.addEventListener("click", handleSeatClick);
        seatContainer.appendChild(seat);
      }
    }

    // Check booked seats for movie & time
    function loadBookedSeats() {
      const path = `bookings/${movieSelect.value}/${timeSelect.value}/${dateSelect.value}`;
      db.ref(path).once("value", snapshot => {
        const booked = snapshot.val();
        if (booked) {
          Object.keys(booked).forEach(seatId => {
            const seat = document.getElementById(seatId);
            if (seat) {
              seat.classList.add("booked");
              console.log("Booked seats: " +seat); //Additional activity
              seat.disabled = true;
              seat.removeEventListener("click", handleSeatClick);
            }
          });
        }
      });
    }

    function handleSeatClick(e) {
      const seat = e.target;
      const seatId = seat.id;
      if (seat.classList.contains("booked")) return;

      if (seat.classList.contains("selected")) {
        seat.classList.remove("selected");
        selectedSeats = selectedSeats.filter(id => id !== seatId);
      } else {
        seat.classList.add("selected");
        selectedSeats.push(seatId);
      }
    }

        // Reload on movie/time change
    movieSelect.addEventListener("change", () => {
      createSeats();
      loadBookedSeats();
    });

    timeSelect.addEventListener("change", () => {
      createSeats();
      loadBookedSeats();
    });

    // Initial Load
    createSeats();
    loadBookedSeats();