function updateLabels() {
  const age = document.getElementById("calc-age").value;
  const height = document.getElementById("calc-height").value;
  const weight = document.getElementById("calc-weight").value;
  const walking = document.getElementById("calc-walking").value;
  const cardio = document.getElementById("calc-cardio").value;

  document.getElementById("calc-age_value").textContent = `Age: ${age}`;
  document.getElementById("calc-height_value").textContent = `Height: ${height} cm`;
  document.getElementById("calc-weight_value").textContent = `Weight: ${weight} kg`;
  document.getElementById("calc-walking_value").textContent = `Walking: ${walking} hours per week`;
  document.getElementById("calc-cardio_value").textContent = `Cardio: ${cardio} hour${cardio === "1" ? "" : "s"} per week`;
}

function calculateAndRender() {
  const height = parseInt(document.getElementById("calc-height").value, 10);
  const age = parseInt(document.getElementById("calc-age").value, 10);
  const weight = parseInt(document.getElementById("calc-weight").value, 10);
  const walking = parseInt(document.getElementById("calc-walking").value, 10);
  const cardio = parseInt(document.getElementById("calc-cardio").value, 10);
  const gender = document.querySelector(".calculator input[name='gender']:checked").value;

  // Same formula/logic as your original jQuery version
  let bmr = parseInt(10 * weight + 6.25 * height - 5 * age, 10) + (gender === "male" ? 5 : -161);
  bmr = bmr * 1.2;
  bmr += walking * 60 * (0.03 * weight * 1 / 0.45) / 7;
  bmr += cardio  * 60 * (0.07 * weight * 1 / 0.45) / 7;
  bmr = Math.floor(bmr);

  const targetGainWeight = Math.round((bmr + 300) / 100) * 100;
  const targetMaintain   = Math.round(bmr / 100) * 100;
  const targetLoseWeight = Math.round((bmr - 500) / 100) * 100;

  document.querySelector("#calc-target-gain span").textContent = `${targetGainWeight} calories`;
  document.querySelector("#calc-target-maintain span").textContent = `${targetMaintain} calories`;
  document.querySelector("#calc-target-lose span").textContent = `${targetLoseWeight} calories`;
}

function handleInput(e) {
  const id = e.target.id.replace("calc-", "");
  const val = e.target.value;

  switch (id) {
    case "height":
      document.getElementById("calc-height_value").textContent = `Height: ${val} cm`;
      break;
    case "weight":
      document.getElementById("calc-weight_value").textContent = `Weight: ${val} kg`;
      break;
    case "age":
      document.getElementById("calc-age_value").textContent = `Age: ${val}`;
      break;
    case "cardio":
      document.getElementById("calc-cardio_value").textContent = `Cardio: ${val} hour${val === "1" ? "" : "s"} per week`;
      break;
    case "walking":
      document.getElementById("calc-walking_value").textContent = `Walking: ${val} hours per week`;
      break;
  }

  calculateAndRender();
}

document.addEventListener("DOMContentLoaded", () => {
  // Wire up all inputs (ranges + radios)
  document.querySelectorAll(".calculator input").forEach((el) => {
    el.addEventListener("input", handleInput);
    el.addEventListener("change", handleInput);
  });

  // Initial UI sync + first calculation
  updateLabels();
  calculateAndRender();
});
