const pointButton = document.getElementById('point-button');
const input = document.getElementById('num-input');
const backspaceButton = document.getElementById('backspace-button');
let num = 0, p = false;
let lop = null;

backspaceButton.onclick = () => {
    if (input.value.leght === -1) {
    } else {
        input.value = input.value.slice(0, -1);
    }
};

enterNumber = (n) => {
    if (n === '.') {
        for (let i = 0; i < input.value.length; i++) {
            if (input.value[i] === '.') {
                return
            }
        }
        input.value += '.';
    }

    if (input.value === '0') {
        input.value = n
    } else {
        if (p) {
            num = parseFloat(input.value);
            input.value = n;
            p = false;
        } else {
            input.value = input.value + n
        }
    }
};

const numButtons = document.getElementsByClassName('button');
[].forEach.call(numButtons, (button) => {
    button.onclick = () => {
        enterNumber(button.textContent)
    }
})

const dispatchOperation = (operation) => {
    if (lop) {
        if (!p) {
            num = processOperation(lop, num, parseFloat(input.value));
            input.value = num;
        }
    }

    p = true;
    lop = operation;
};

const processOperation = (operation, argument1, argument2) => {
    switch (operation) {
        case '+':
            return argument1 + argument2;
        case  '-':
            return argument1 - argument2;
        case '*':
            return argument1 * argument2;
        case '/':
            return argument1 / argument2;
    }
};

const operationButtons = document.getElementsByClassName('operation-button');
for (let i = 0; i < operationButtons.length; i++) {
    const button = operationButtons [i];
    button.onclick = () => {
        dispatchOperation(button.textContent);
    }
}


//DOM - Document Object Model
//BOM - Browser Object Model

