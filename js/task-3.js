const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', () => {
  const name = inputElement.value.trim();
  outputElement.textContent = name === '' ? 'Anonymous' : name;
});