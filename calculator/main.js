const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operator');
const clearBtns = document.querySelectorAll('.clear-btn');
const decimalBtn = document.getElementById('decimal');
const result = document.getElementById('result');
const display = document.getElementById('display');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';
const crops = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
var isCrops = false;

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

for (var i = 0; i < operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener('click', function (e) {
    operationPress(e.target.textContent);
  });
}

for (var i = 0; i < clearBtns.length; i++) {
  var clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.target.textContent);
  });
}

decimalBtn.addEventListener('click', decimal);

function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === '0') {
      display.value = number;
    } else {
      display.value += number;
    }
    if (number === '+/-') {
      var displayValue = display.value;
      displayValue = displayValue.slice(0, -3);
      displayValue = Number(displayValue);
      display.value = 0 - displayValue;
  }
  }
}

function operationPress(op) {
  let localOperationMemory = display.value;
  if (op === '√‎') {
  	MemoryCurrentNumber = Math.sqrt(localOperationMemory);
  	localOperationMemory = MemoryCurrentNumber;
  }

  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = MemoryCurrentNumber;
  } else {
  	if (op != '√‎') {
  		MemoryNewNumber = true;
  	}
    if (MemoryPendingOperation === '+') {
      if (crops(MemoryCurrentNumber) == 1) {
        isCrops = true;
      }
      if (crops(MemoryCurrentNumber) == 0) {
        isCrops = false;
      }
      MemoryCurrentNumber += +localOperationMemory;
      if (isCrops) {
        MemoryCurrentNumber = MemoryCurrentNumber.toFixed(1);
        isCrops = false;
      }
    } else if (MemoryPendingOperation === '-') {
      if (crops(MemoryCurrentNumber) == 1) {
        isCrops = true;
      }
      if (crops(MemoryCurrentNumber) == 0) {
        isCrops = false;
      }
      MemoryCurrentNumber -= +localOperationMemory;
      if (isCrops) {
        MemoryCurrentNumber = MemoryCurrentNumber.toFixed(1);
        isCrops = false;
      }
    } else if (MemoryPendingOperation === '*') {
      var MemoryCurrentString = MemoryCurrentNumber.toString();
      if (crops(MemoryCurrentNumber) == 1) {
        isCrops = true;
      }
      if (crops(MemoryCurrentNumber) == 0) {
        isCrops = false;
      }
      MemoryCurrentNumber *= +localOperationMemory;
      if (isCrops && crops(MemoryCurrentNumber) == 1) {
        MemoryCurrentNumber = MemoryCurrentNumber.toFixed(1);
        isCrops = false;
      }
      if (crops(MemoryCurrentNumber) > 1) {
        MemoryCurrentNumber = MemoryCurrentNumber.toFixed(2);
        isCrops = false;
      }
      if (MemoryCurrentString.slice(0, -1) == "0") {
        MemoryCurrentString = MemoryCurrentString.slice(0, -1);
        MemoryCurrentNumber = Number(MemoryCurrentString);
      }
    } else if (MemoryPendingOperation === '/') {
      if (crops(MemoryCurrentNumber) == 1) {
        isCrops = true;
      }
      if (crops(MemoryCurrentNumber) == 0) {
        isCrops = false;
      }
      MemoryCurrentNumber /= +localOperationMemory;
      if (isCrops && crops(MemoryCurrentNumber) == 1) {
        MemoryCurrentNumber = MemoryCurrentNumber.toFixed(1);
        isCrops = false;
      }
    } else if (MemoryPendingOperation === 'x²') {
      MemoryCurrentNumber = Math.pow(MemoryCurrentNumber, localOperationMemory);
    } else {
      MemoryCurrentNumber = +localOperationMemory;
    }
    if (isNaN(localOperationMemory)) {
  		MemoryCurrentNumber = "Ошибка";
  	}
    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = op;
  }
}

function decimal(argument) {
  let localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = '0.';
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    }
  }
  display.value = localDecimalMemory;
}

function clear(id) {
  if (id === 'ce') {
    display.value = '0';
    MemoryNewNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  }
}