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