let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.getElementById('clear').addEventListener('click', () => {
    display.value = '';
});

document.getElementById('back').addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});