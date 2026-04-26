fetch("/recipes/src/js/data/index.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("recipes");

    data.forEach(recept => {
      const card = document.createElement("div");
      card.classList.add("card");

      const title = document.createElement("h3");
      title.textContent = recept.nev;

      card.appendChild(title);

      card.addEventListener("click", () => {
        window.location.href = `/recipes/recipe.html?id=${recept.id}`;
      });

      container.appendChild(card);
    });
  });