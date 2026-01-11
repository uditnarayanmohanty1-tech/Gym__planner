document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const goal = document.getElementById("goal").value;
  const diet = document.querySelector('input[name="diet"]:checked').value;

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

  let calories = weight * 24;
  if (goal === "loss") calories -= 500;
  if (goal === "gain") calories += 500;

  localStorage.setItem("bmi", bmi);
  localStorage.setItem("calories", calories);
  localStorage.setItem("goal", goal);
  localStorage.setItem("diet", diet);
  localStorage.setItem("startWeight", weight);


  window.location.href = "dashboard.html";
});
