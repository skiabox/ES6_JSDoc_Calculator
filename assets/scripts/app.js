/**
 * Default Result
 * @type {number}
 */
const defaultResult = 0;

/**
 * Global variable for result, indepedent of next calculation (add, subtract, divide, multiply)
 * @type {number}
 */
let currentResult = defaultResult;

/**
 * Global array for saving the logs of the calculations
 * @type {Array<{operation: string, prevResult: number, number: number, result: number}>}
 */
const logEntries = [];

/**
 * Gets input from input field
 * @returns {number} - User input converted to number
 */
const getUserNumberInput = () => {
  return parseInt(userInput.value); // convert text to int
};

/**
 * Generates and writes calculation log
 * @param {string} operator - The operator of the calculation
 * @param {number} resultBeforeCalc
 * @param {number} calcNumber
 */
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  /**
   * Description of the calculation
   * @type {string}
   */
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;

  outputResult(currentResult, calcDescription); // from vendor file
};

/**
 *
 * @param {string} operationIdentifier
 * @param {number} prevResult
 * @param {number} operationNumber
 * @param {number} newResult
 */
const writeToLog = (
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) => {
  // create log object
  /**
   * Global array for saving the logs of the calculations
   * @type {{operation: string, prevResult: number, number: number, result: number}}
   */
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };

  // add entry to the array of log entries
  logEntries.push(logEntry);

  // console log the latest array of log entries
  console.log(logEntries);
};

/**
 *
 * @param {string} calculationType
 * DO the calculation
 * @returns {void}
 */
const calculateResult = calculationType => {
  /**
   * Number entered by the user
   * @type {number}
   */
  const enteredNumber = getUserNumberInput();

  /**
   * Initial result before add calculation
   * @type {number}
   */
  const initialResult = currentResult;

  /**
   * @type {string}
   */
  let mathOperator;

  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  // output the calc description and the new result in separate lines
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);

  // write to log by calling writeToLog function
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
};

/**
 * Add two numbers
 * @returns {void}
 */
const add = () => {
  calculateResult('ADD');
};

/**
 * Subtract two numbers
 * @returns {void}
 */
const subtract = () => {
  calculateResult('SUBTRACT');
};

/**
 * Multiply two numbers
 * @returns {void}
 */
const multiply = () => {
  calculateResult('MULTIPLY');
};

/**
 * Divide two numbers
 * @returns {void}
 */
const divide = () => {
  calculateResult('DIVIDE');
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
