const decrementBtn = document.querySelector('[data-action="decrement"]');
const currentValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = Number(currentValue.textContent);

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

function increment(event) {
    counterValue += 1;
    currentValue.textContent = counterValue;

}

function decrement(event) {
    counterValue -= 1;
    currentValue.textContent = counterValue;

}
