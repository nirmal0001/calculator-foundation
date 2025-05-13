function add(num, num2){
    return num + num2;
}

function subtract(num, num2){
    return num - num2;
}

function multiply(num, num2){
    return num * num2;
}

function divide(num, num2){
    return num / num2;
}

function operate(num, opr, num2){
    switch (opr) {
        case '+':
            return add(num, num2);
        case '-':
            return subtract(num, num2);
        case 'x':
            return multiply(num, num2);
        case '/':
            return divide(num, num2);
    };
}


const display = document.querySelector('.display');
const digitsButtons = document.querySelectorAll('.digits button');
const operaterButtons = document.querySelectorAll('.operater button');
const operateButton = document.querySelector('.operate');
const clearButton = document.querySelector('.clear');
const operates = ['+', '-', 'x', '/']
let selectedOperater;
let alreadyCalculated;
function updateDisplay(e, type){
    let oldValue = display.innerText;
    let newValue = e.srcElement.innerText;

    if (type == 'digit' && alreadyCalculated){
        oldValue = '';
    }
    if (type == 'operater'){
        let operaterPresent = operates.some(item => oldValue.includes(item));
        if (operaterPresent){
            alert('can`t enter operater again ');
            return;
        }
        selectedOperater = newValue;
        alreadyCalculated = false;
        
    }
    if (type == 'operate'){
        let  values = oldValue.split(selectedOperater);
        if (values.length < 2){
            alert('not possible enter second number');
            return;
        }
        else {
            let value = operate(+values[0], selectedOperater, +values[1]);
            if (Object.is(value, NaN) && selectedOperater == '/'){
                alert('cant divide by zero!!!!');
                display.innerHTML = '';
            }
            else {
                display.innerText = Math.round(value * 10) / 10
                alreadyCalculated = true;
            }
            selectedOperater = undefined;
            return;
        }
    }
    display.innerText = oldValue + newValue;
}

digitsButtons.forEach(button => button.addEventListener('click', (e) => updateDisplay(e, 'digit')));
operaterButtons.forEach(button => button.addEventListener('click', (e) => updateDisplay(e, 'operater')));
operateButton.addEventListener('click', (e) => updateDisplay(e, 'operate'));
clearButton.addEventListener('click', () => display.innerText = '');