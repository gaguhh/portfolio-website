function addRecommendation() {
  const name = document.getElementById("rec-name").value;
  const text = document.getElementById("rec-text").value;

  if (name === "" || text === "") {
    alert("Please fill all fields");
    return;
  }

  const container = document.getElementById("recommendations");

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <p>${text}</p>
    <h4>- ${name}</h4>
  `;

  container.appendChild(card);

  document.getElementById("rec-name").value = "";
  document.getElementById("rec-text").value = "";
}
