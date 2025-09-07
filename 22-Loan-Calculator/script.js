const calculateLoan = () => {
  let amount = document.getElementById("amount").value;
  let interest = document.getElementById("interest").value;
  let months = document.getElementById("months").value;

  // Keep original logic exactly as provided
  let monthlyPayment = (amount / months) + interest;
  let totalInterest = (amount * (interest * 0.01)) / months;
  let totalPayment = parseFloat(amount) + parseFloat(totalInterest);

  document.getElementById("result").innerHTML = `
    <h2>Results :</h2>
    <h4>Total payment : ${parseFloat(totalPayment).toFixed(2)}</h4> 
    <h4>Monthly Payment : ${parseFloat(monthlyPayment).toFixed(2)}</h4>
    <h4>Total Interest : ${parseFloat(totalInterest).toFixed(2)}</h4>
  `;
};

// removed inline onclick; wire up here
document.getElementById("calculateBtn").addEventListener("click", calculateLoan);
