let result = document.getElementById('result');
let expression = '';

function appendValue(value) {
    expression += value;
    result.value = expression;
}

function clearResult() {
    expression = '';
    result.value = '';
}

function calculate() {
    try {
        result.value = eval(expression);
        expression = '';
    } catch (error) {
        result.value = 'Error';
    }
}

