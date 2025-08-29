const result = document.getElementById("result");
const totalBillInput = document.getElementById("totalBill");
const tipPercentageInput = document.getElementById("tipPercentage");
const numOfPersonInput = document.getElementById("numOfPerson");
const tipPercentageText = document.getElementById("tipPercentageText");
const numOfPersonText = document.getElementById("numOfPersonText");

function calculateTip() {
  const bill = Number(totalBillInput.value) || 0;
  const tipPercentage = Number(tipPercentageInput.value);
  const numOfPerson = Number(numOfPersonInput.value);

  const tip = bill * (tipPercentage / 100);
  const totalBill = bill + tip;
  const perPersonPay = numOfPerson ? totalBill / numOfPerson : 0;

  tipPercentageText.textContent = `${tipPercentage}%`;
  numOfPersonText.textContent = numOfPerson;

  result.innerHTML = `
    <h5 class="result-row">
      <span>Tip</span>
      <span class="value">${tip.toFixed(2)}</span>
    </h5>
    <h5 class="result-row">
      <span>Total</span>
      <span class="value">${totalBill.toFixed(2)}</span>
    </h5>
    <h5 class="result-row">
      <span>Each Person Pay</span>
      <span class="value">${perPersonPay.toFixed(2)}</span>
    </h5>
  `;
}

// Event listeners
totalBillInput.addEventListener("input", calculateTip);
tipPercentageInput.addEventListener("input", calculateTip);
numOfPersonInput.addEventListener("input", calculateTip);
