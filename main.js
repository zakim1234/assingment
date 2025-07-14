const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const result = document.querySelector("#res");
const btn_cal = document.querySelector("#btn");

btn_cal.addEventListener("click", () => {
  let h = parseFloat(height.value);
  let w = parseFloat(weight.value);

  if (!h || !w || h <= 0 || w <= 0) {
    result.innerHTML = "Please enter valid height and weight.";
    result.classList.add("text-red-500");
    return;
  }

  let bmi = w / ((h / 100) ** 2);
  result.innerHTML = "Your BMI is: " + bmi.toFixed(2);
  result.classList.remove("text-red-500");
});

function resetForm() {
  height.value = "";
  weight.value = "";
  result.innerHTML = "";
}
