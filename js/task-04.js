const decrementBtn = document.querySelector('[data-action="decrement"]');
const currentValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = Number(currentValue.textContent);

incrementBtn.addEventListener('click', () => {

    counterValue += 1;
    currentValue.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {

    counterValue -= 1;
    currentValue.textContent = counterValue;
});

