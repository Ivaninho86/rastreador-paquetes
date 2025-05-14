const form = document.getElementById("tracking-form");
const resultBox = document.getElementById("results");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const tracking = document.getElementById("tracking-number").value;
  document.getElementById("tracking-id").textContent = tracking;
  document.getElementById("tracking-status").textContent = "En tránsito (simulado)";
  resultBox.style.display = "block";
});

