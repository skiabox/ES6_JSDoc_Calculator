const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

/**
 *
 * @param {number} result - Result of the calculation
 * @param {string} text - Description of the calculation
 */
function outputResult(result, text) {
  currentResultOutput.textContent = result.toString();
  currentCalculationOutput.textContent = text;
}
