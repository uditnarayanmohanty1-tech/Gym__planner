document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("generateBtn");

  if (!btn) {
    console.error("Button not found");
    return;
  }

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (!age || !height || !weight) {
      alert("Please fill all details");
      return;
    }

    alert(
      "Plan Generated!\n\n" +
      "Age: " + age +
      "\nHeight: " + height + " cm" +
      "\nWeight: " + weight + " kg"
    );
  });
});
