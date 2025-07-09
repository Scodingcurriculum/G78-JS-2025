// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL1OzZRhw4PBxdpOr9qbbOGgye-d2stpI",
    authDomain: "to-do-list-2ef61.firebaseapp.com",
    databaseURL: "https://to-do-list-2ef61-default-rtdb.firebaseio.com",
    projectId: "to-do-list-2ef61",
    storageBucket: "to-do-list-2ef61.firebasestorage.app",
    messagingSenderId: "1046977432955",
    appId: "1:1046977432955:web:c026c3327712c813c541de"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Add task
function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const dateInput = document.getElementById('dateInput').value;
    db.ref('tasks').push({
        task: taskInput,
        date: dateInput,
        completed: false
    }).then(() => {
        console.log('Task added!');
        getTasks();
    });
}

// Get tasks
function getTasks() {
    db.ref('tasks').orderByChild('date').on('value', (snapshot) => {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = `${childSnapshot.val().task} - ${childSnapshot.val().date}`;
            taskItem.className = childSnapshot.val().completed ? 'completed' : '';
            taskItem.onclick = () => toggleComplete(childSnapshot.key, childSnapshot.val().completed);
            taskList.appendChild(taskItem);
        });
    });
}

// Toggle task completion
function toggleComplete(taskId, currentStatus) {
    db.ref('tasks/' + taskId).update({
        completed: !currentStatus
    }).then(() => {
        console.log('Task status updated!');
        getTasks();
    });
}

// Call getTasks on page load
window.onload = getTasks;
