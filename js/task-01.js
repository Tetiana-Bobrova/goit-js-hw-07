const categoriesEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesEl.length} категории.`);

const showCategories = categories => categories.forEach(category =>
    console.log(`Категория: ${category.querySelector(`h2`).textContent}.
Количество элементов: ${category.querySelectorAll(`li`).length}.`));
showCategories(categoriesEl);