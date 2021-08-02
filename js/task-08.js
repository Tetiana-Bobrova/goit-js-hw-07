

const inputEl = document.querySelector('input');
const BtnCreateBox = document.querySelector('[data-action="render"]');
const BtnDestroyBox = document.querySelector('[data-action="destroy"]');
const divBoxesEl = document.querySelector('#boxes');


inputEl.addEventListener('input', onInput);
BtnCreateBox.addEventListener('click', onCreateRandomBox);
BtnDestroyBox.addEventListener('click', onDestroyBox);


function onInput(event) {
    event.currentTarget.value;
}

function onCreateRandomBox(amount) {

    amount = inputEl.value;
    const divBoxes = [];
    const sizeDiv = 30;
    for (let i = 0; i < amount; i += 1) {
        const currentDiv = document.createElement("div");
        currentDiv.setAttribute("style", "list-style:none;  display: inline - block; justify - content: space - around; margin: 10px; padding: 0; ");
        currentDiv.style.background = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ')';
        currentDiv.style.width = sizeDiv + 10 * i + "px";
        currentDiv.style.height = sizeDiv + 10 * i + "px";
        divBoxes.push(currentDiv);
    }
    divBoxesEl.append(...divBoxes);
}


function onDestroyBox() {
    divBoxesEl.innerHTML = '';

}


