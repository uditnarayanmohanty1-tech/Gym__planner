const goal = localStorage.getItem("goal");
const div = document.getElementById("workout");

if (goal === "loss") {
  div.innerHTML = "<ul><li>Cardio</li><li>Full Body</li></ul>";
} else if (goal === "gain") {
  div.innerHTML = "<ul><li>Chest</li><li>Back</li><li>Legs</li></ul>";
} else {
  div.innerHTML = "<ul><li>Light workout</li></ul>";
}
