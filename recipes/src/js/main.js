const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`/data/${id}.json`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("recept");

    const title = document.createElement("h1");
    title.textContent = data.nev;

    const ul = document.createElement("ul");

    data.hozzavalok.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    container.appendChild(title);
    container.appendChild(ul);
  });