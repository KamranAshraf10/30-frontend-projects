// Get references to the HTML elements

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculatebtn = document.querySelector(".btn");
const resetbtn = document.querySelector(".reset-btn");
const bmivalue = document.getElementById("bmi-value");
const bmiStatus = document.getElementById("bmi-status");

// console.log(heightElement, weightElement, calculatebtn);

// Function to calculate BMI
function CalculateBMI() {
  const height = heightInput.value;
  const weight = weightInput.value;

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight values.");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  bmivalue.textContent = bmi.toFixed(1);

  if (bmi < 18.5) {
    bmiStatus.textContent = "You are underweight";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    bmiStatus.textContent = "You are Healthy!";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiStatus.textContent = "You are Overweight.";
  } else if (bmi >= 30) {
    bmiStatus.textContent = "You are Obese.";
  }
}
function reset() {
  heightInput.value = "";
  weightInput.value = "";
  bmivalue.textContent = "0.0";
  bmiStatus.textContent = "Please Enter Your Height & Weight";
}

calculatebtn.addEventListener("click", CalculateBMI);
resetbtn.addEventListener("click", reset);
