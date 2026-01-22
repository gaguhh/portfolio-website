function addRecommendation() {
  let name = document.getElementById("name").value;
  let rec = document.getElementById("recommendation").value;

  if (name === "" || rec === "") {
    alert("Fill all fields");
    return;
  }

  let container = document.getElementById("recommendation-list");

  let div = document.createElement("div");
  div.classList.add("recommendation");

  div.innerHTML = "<h4>" + name + "</h4><p>" + rec + "</p>";

  container.appendChild(div);

  document.getElementById("name").value = "";
  document.getElementById("recommendation").value = "";
}
