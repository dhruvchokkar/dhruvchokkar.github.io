let differences = [];

const titleEl = document.getElementById("title");
const tableEl = document.getElementById("diffTable");
const moreBtn = document.getElementById("moreBtn");

// Load data from JSON file
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    differences = data;
    renderDifference(differences[0]);
  })
  .catch(err => console.error("Failed to load data.json", err));

function renderDifference(entry) {
  titleEl.textContent = entry.title;
  tableEl.innerHTML = "";

  const headerRow = document.createElement("tr");
  const contentRow = document.createElement("tr");

  entry.items.forEach(item => {
    // Header cell
    const th = document.createElement("th");
    th.textContent = item.name;
    headerRow.appendChild(th);

    // Content cell (as a list)
    const td = document.createElement("td");
    const ul = document.createElement("ul");

    item.meaning.forEach(line => {
      const li = document.createElement("li");
      li.textContent = line;
      ul.appendChild(li);
    });

    td.appendChild(ul);
    contentRow.appendChild(td);
  });

  tableEl.appendChild(headerRow);
  tableEl.appendChild(contentRow);
}

// Random "More" button
moreBtn.addEventListener("click", () => {
  if (!differences.length) return;

  const random =
    differences[Math.floor(Math.random() * differences.length)];

  renderDifference(random);
});
