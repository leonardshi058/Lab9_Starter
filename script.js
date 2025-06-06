class InputError extends Error {
  constructor(message) {
    super(message);
    this.name = "InputError";
  }
}

let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;

try {
    if (firstNum.trim() === '' || secondNum.trim() === '') {
      throw new InputError("Both input fields must be filled.");
    }

    if (isNaN(firstNum) || isNaN(secondNum)) {
      throw new InputError("Inputs must be numbers.");
    }

    if (operator === '/' && Number(secondNum) === 0) {
      throw new InputError("Division by zero is not allowed.");
    }

    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (err) {
    if (err instanceof InputError) {
      console.error(`Custom InputError: ${err.message}`);
    } else {
      console.error(`Unknown error: ${err}`);
    }
    output.innerHTML = `Error: ${err.message}`;
  } finally {
    console.log('Calculation attempted.');
  }
});



let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

console.count('Script Loaded'); // Count once on load

let data = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Carol', age: 19 }
];

let timerStarted = false;

errorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const label = btn.innerText;

    switch (label) {
      case 'Console Log':
        console.log('This is a console.log message', data);
        break;

      case 'Console Error':
        console.error('This is a console.error message');
        break;

      case 'Console Count':
        console.count('Count button clicked');
        break;

      case 'Console Warn':
        console.warn('This is a console.warn message');
        break;

      case 'Console Assert':
        console.assert(false, 'Assertion failed: This should appear');
        break;

      case 'Console Clear':
        console.clear();
        break;

      case 'Console Dir':
        console.dir(document.body);
        break;

      case 'Console dirxml':
        console.dirxml(document);
        break;

      case 'Console Group Start':
        console.group('Grouped Logs');
        console.log('Inside group log 1');
        console.log('Inside group log 2');
        break;

      case 'Console Group End':
        console.groupEnd();
        break;

      case 'Console Table':
        console.table(data);
        break;

      case 'Start Timer':
        if (!timerStarted) {
          console.time('Timer');
          timerStarted = true;
        } else {
          console.warn('Timer already started.');
        }
        break;

      case 'End Timer':
        if (timerStarted) {
          console.timeEnd('Timer');
          timerStarted = false;
        } else {
          console.warn('Timer not started yet.');
        }
        break;

      case 'Console Trace':
        function traceCaller() {
          console.trace('Trace button clicked');
        }
        traceCaller();
        break;

      case 'Trigger a Global Error':
        nonExistentFunction(); // Intentionally undefined
        break;
    }
  });
});

window.onerror = function(message, source, lineno, colno, error) {
  alert("Global error caught!\n" + message); 
  console.log("Global error caught:");
  console.log("Message:", message);
  console.log("Source:", source);
  console.log("Line:", lineno);
  console.log("Column:", colno);
  console.log("Error object:", error);
};