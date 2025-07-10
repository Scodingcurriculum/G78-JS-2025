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