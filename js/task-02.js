const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientListEl = document.querySelector("#ingredients");

const ingredientList = ingredients.map(ingredient => {
    const ingredientItemEl = document.createElement('li');
    ingredientItemEl.classList.add('ingredient-item');
    ingredientItemEl.textContent = ingredient;

    return ingredientItemEl;
});

ingredientListEl.append(...ingredientList);
//console.log(ingredientListEl);
