function save() {
  const currentWeight = document.getElementById("w").value;
  if (!currentWeight) return;

  localStorage.setItem("progress", currentWeight);
  show();
}

function show() {
  const startWeight = parseFloat(localStorage.getItem("startWeight"));
  const currentWeight = parseFloat(localStorage.getItem("progress"));

  document.getElementById("show").innerText = currentWeight;

  if (!startWeight || !currentWeight) return;

  const diff = startWeight - currentWeight;
  let percent = diff > 0 ? Math.min(diff * 5, 100) : 0;

  document.getElementById("progress-bar").style.width = percent + "%";

  const text = document.getElementById("progress-text");

  if (diff > 0) {
    text.innerText = "Great progress, keep going 💪";
  } else if (diff === 0) {
    text.innerText = "No change yet. Stay consistent 🙂";
  } else {
    text.innerText = "Weight increased. Refocus and try again 🔁";
  }
}

show();
