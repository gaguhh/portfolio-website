function addRecommendation() {
  const name = document.getElementById("name").value;
  const text = document.getElementById("recommendation").value;

  if (name === "" || text === "") {
    alert("Please fill all fields");
    return;
  }

  const container = document.getElementById("recommendation-list");

  const div = document.createElement("div");
  div.className = "recommendation";

  div.innerHTML = `
    <p>"${text}"</p>
    <h4>- ${name}</h4>
  `;

  container.appendChild(div);

  document.getElementById("name").value = "";
  document.getElementById("recommendation").value = "";
}
