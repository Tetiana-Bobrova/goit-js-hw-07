const InputEl = document.querySelector('#font-size-control');
const SpanEl = document.querySelector('#text');

InputEl.addEventListener('input', onChangeFont);

function onChangeFont(event) {

    SpanEl.style.fontSize = event.currentTarget.value + "px";

}
