function addRecommendation() {
  const name = document.getElementById("name").value;
  const text = document.getElementById("recommendation").value;

  if (name === "" || text === "") {
    alert("Please fill both fields");
    return;
  }

  const container = document.getElementById("recommendations-list");

  const card = document.createElement("div");
  card.className = "recommendation-card";

  card.innerHTML = `
    <p>"${text}"</p>
    <strong>- ${name}</strong>
  `;

  container.appendChild(card);

  document.getElementById("name").value = "";
  document.getElementById("recommendation").value = "";
}
