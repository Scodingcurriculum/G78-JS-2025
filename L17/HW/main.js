// ✅ Import Firebase (Latest Modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDa2uGZ0vVS5OOdt1eRJq4jvsgWBezWwNE",
    authDomain: "smart-parking-2b90f.firebaseapp.com",
    databaseURL: "https://smart-parking-2b90f-default-rtdb.firebaseio.com",
    projectId: "smart-parking-2b90f",
    storageBucket: "smart-parking-2b90f.firebasestorage.app",
    messagingSenderId: "1013765176855",
    appId: "1:1013765176855:web:f73a09232ab8bcccb72652"
  };
  

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 🚗 Fetch Parking Slots in Real-Time
function loadParkingSlots() {
    const slotsRef = ref(db, "parking_slots");
    onValue(slotsRef, (snapshot) => {
        const slots = snapshot.val();
        let output = "";
        for (let id in slots) {
            let status = slots[id].status;
            output += `
                <div>
                    <span>Slot ${id}: ${status.toUpperCase()}</span>
                    ${status === "available" ? 
                        `<button onclick="reserveSlot(${id})">Reserve</button>` : 
                        `<button onclick="releaseSlot(${id})">Release</button>`}
                </div>`;
        }
        document.getElementById("parkingSlots").innerHTML = output;
    });
}

// ✅ Reserve Parking Slot
window.reserveSlot = function (slotId) {
    const slotRef = ref(db, "parking_slots/" + slotId);
    set(slotRef, { status: "reserved" });
};
// ✅ Release Parking Slot
window.releaseSlot = function (slotId) {
    const slotRef = ref(db, "parking_slots/" + slotId);
    set(slotRef, { status: "available" });
};

// 🔄 Load Parking Slots on Page Load
loadParkingSlots();
