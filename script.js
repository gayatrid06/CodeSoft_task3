let input = document.getElementById('result');

function appendCharacter(character) {
  input.value += character;
}

function appendOperator(operator) {
  input.value += operator;
}

function clearInput() {
  input.value = '';
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = 'Error';
  }
}
