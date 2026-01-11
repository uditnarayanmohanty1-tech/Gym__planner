document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("generateBtn");

  btn.addEventListener("click", function () {
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
