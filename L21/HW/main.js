function openPayment(plan, price) {
  document.getElementById('selectedPlan').innerText = plan;
  document.getElementById('selectedPrice').innerText = price;
  document.getElementById('paymentModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('paymentModal').style.display = 'none';
}

function submitPayment() {
  alert("Payment Successful! Thank you for subscribing.");
  closeModal();
}
function submitPayment() {
  const userEmail = document.getElementById("userEmail").value;
  const plan = document.getElementById("selectedPlan").innerText;
  const price = document.getElementById("selectedPrice").innerText;

  if (!userEmail) {
    alert("Please enter your email.");
    return;
  }

  const params = {
    email: userEmail,
    plan_name: plan,
    plan_price: price,
  };

  emailjs.send("SERVICE ID", "TEMPLATE ID", params)
    .then(() => {
      alert("Payment successful! Confirmation email sent.");
      closeModal();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Payment success, but email failed to send.");
    });
}
