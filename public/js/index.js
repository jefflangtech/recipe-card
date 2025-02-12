const overlay = document.getElementsByClassName('overlay')[0];

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'u') {
      event.preventDefault();
      if (overlay) {
        console.dir(overlay);
        overlay.hidden = !overlay.hidden;
      }
  }
});


document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('./public/data/data.json');
  const data = await response.json();
  const recipe = data.recipe;

  const dataSections = document.querySelectorAll('[data-key]');

  dataSections.forEach(section => {

    dataKey = section.dataset.key;

    if(dataKey === 'title' || dataKey === 'description') {
      section.textContent = recipe[dataKey];
      return;
    }
    const card = document.createElement('recipe-card');
    section.appendChild(card);

    card.content = {
      title: recipe.details[dataKey].title,
      list: recipe.details[dataKey].items,
      ordered: recipe.details[dataKey].ordered
    }
  });
});