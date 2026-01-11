const diet = localStorage.getItem("diet");
const div = document.getElementById("dietPlan");

if (diet === "veg") {
  div.innerHTML = `
    <h3>Vegetarian Diet</h3>
    <ul>
      <li>Breakfast: Oats, fruits</li>
      <li>Lunch: Dal, rice, vegetables</li>
      <li>Dinner: Roti, paneer</li>
    </ul>`;
} else {
  div.innerHTML = `
    <h3>Non-Vegetarian Diet</h3>
    <ul>
      <li>Breakfast: Eggs</li>
      <li>Lunch: Chicken, rice</li>
      <li>Dinner: Fish or chicken</li>
    </ul>`;
}
