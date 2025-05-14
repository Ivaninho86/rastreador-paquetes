
const form = document.getElementById("tracking-form");
const resultBox = document.getElementById("results");

form.addEventListener("submit", async function(e) {
  e.preventDefault();
  const tracking = document.getElementById("tracking-number").value;

  const response = await fetch(`https://api.aftership.com/v4/trackings/auto/${tracking}`, {
    method: "GET",
    headers: {
      "aftership-api-key": "asat_995061e924374401ba8861ecfa790339",
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();

  document.getElementById("tracking-id").textContent = tracking;
  document.getElementById("tracking-status").textContent =
    data?.data?.tracking?.tag || "Estado no disponible";

  resultBox.style.display = "block";
});
