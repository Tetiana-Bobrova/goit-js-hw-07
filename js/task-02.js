//В HTML есть пустой список ul#ingredients.
//<ul id="ingredients"></ul>
//В JS есть массив строк.
//Напиши скрипт, который для каждого элемента массива ingredients
//создаст отдельный li, после чего вставит все li за одну операцию в
//список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().

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
