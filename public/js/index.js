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

  const ingredientsCard = document.createElement('recipe-card');

  document.querySelector('#ingredients-container').appendChild(ingredientsCard);

  ingredientsCard.content = {
    title: recipe.ingredients.title,
    list: recipe.ingredients.items,
    ordered: recipe.ingredients.ordered
  }

  const instructionsCard = document.createElement('recipe-card');

  document.querySelector('#instructions-container').appendChild(instructionsCard);

  instructionsCard.content = {
    title: recipe.instructions.title,
    list: recipe.instructions.items,
    ordered: recipe.instructions.ordered
  }

  const preparationCard = document.createElement('recipe-card');

  document.querySelector('#preparation-container').appendChild(preparationCard);

  preparationCard.content = {
    title: recipe.preparation.title,
    list: recipe.preparation.items,
    ordered: recipe.preparation.ordered
  }

});