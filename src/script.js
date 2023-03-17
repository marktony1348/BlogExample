// get modal and close button
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

// get filter input and recipe list
const filterInput = document.getElementById('filter-input');
const recipeList = document.getElementById('recipe-list');

// open modal on more button click
const moreButtons = document.querySelectorAll('.more-button');
moreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

// close modal on close button click
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// filter recipe list on input change
filterInput.addEventListener('input', () => {
  const filterValue = filterInput.value.toLowerCase();
  const recipes = recipeList.getElementsByTagName('li');

  Array.from(recipes).forEach((recipe) => {
    const recipeText = recipe.textContent.toLowerCase();
    if (recipeText.indexOf(filterValue) > -1) {
      recipe.style.display = '';
    } else {
      recipe.style.display = 'none';
    }
  });
});
