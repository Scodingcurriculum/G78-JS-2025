// script.js
document.getElementById('meetingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    const title = document.getElementById('meetingTitle').value;
    const date = document.getElementById('meetingDate').value;
    const time = document.getElementById('meetingTime').value;

    // Combine date and time into a single Date object
    const meetingDateTime = new Date(`${date}T${time}`);

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${title} - ${date} at ${time}`;

    // Append the new list item to the meeting list
    document.getElementById('meetingList').appendChild(li);

    // Clear the form fields
    document.getElementById('meetingTitle').value = '';
    document.getElementById('meetingDate').value = '';
    document.getElementById('meetingTime').value = '';

    // Set a reminder 5 minutes before the meeting
    const now = new Date();
    const timeDifference = meetingDateTime - now - 5 * 60 * 1000; // 5 minutes before

    if (timeDifference > 0) { // Ensure the meeting is in the future
        setTimeout(function() {
            alert(`Reminder: Your meeting "${title}" is in 5 minutes!`);
        }, timeDifference);
    } else {
        alert('The meeting time must be in the future!');
    }
});