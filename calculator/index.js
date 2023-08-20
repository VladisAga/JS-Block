const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const num5 = document.querySelector('.num5');
const num6 = document.querySelector('.num6');
const num7 = document.querySelector('.num7');
const num8 = document.querySelector('.num8');
const num9 = document.querySelector('.num9');
const num0 = document.querySelector('.num0');
const plus = document.querySelector('.plus');
const del = document.querySelector('.del');
const minus = document.querySelector('.minus');
const equally = document.querySelector('.equally');
const mul = document.querySelector('.mul');
const div = document.querySelector('.div');
const fullStop = document.querySelector('.fullStop');

const arr = [num1, num2, plus, num0, num3, num4, num5, num6, num7, num8, num9, div, minus, mul, fullStop];
const operators = [div, minus, mul, plus];
const calcField = document.querySelector('.calcField');
let index;

document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;
    console.log(keyPressed);

    switch (keyPressed) {
        case ('Enter'):
        case ('='):
            forEqually();
            break;
    }
});

arr.forEach((value) => {
    value.addEventListener('click', () => {
        const arrVal = value.value;

        if (operators.includes(value)) {
            calcField.value += ` ${arrVal} `;
        } else {
            calcField.value += arrVal;
        }

        for (let val of operators) {
            index = calcField.value.indexOf(val.value);
            if (index !== -1) break;
        }
        console.log(index);

        let spliter = calcField.value[index];

        splitFanc(spliter);
    });

});

del.addEventListener('click', () => {
    const inputVal = calcField.value;
    calcField.value = inputVal.slice(0, inputVal.length - 1);
});

let arrNumValue;

const splitFanc = (value) => {
    const arrValue = calcField.value.split(value);

    arrNumValue = arrValue.map(value => {
        const number = parseFloat(value);
        return isNaN(number) ? value : number;
    });
    console.log(arrValue);
    console.log(arrNumValue)
};

const calculate = {
    '+': plusFanc = (a, b) => {
        let result = a + b;
        calcField.value = result;
    },
    '-': minusFanc = (a, b) => {
        let result = a - b;
        calcField.value = result;
    },
    '/': divFunc = (a, b) => {
        let result = a / b;
        calcField.value = result;
    },
    '*': mulFunc = (a, b) => {
        let result = a * b;
        calcField.value = result;
    },
};

const keys = Object.keys(calculate);

const forEqually = () => {
    switch (calcField.value[index]) {
        case (keys[0]):
            calculate['+'](arrNumValue[0], arrNumValue[1]);
            break;
        case (keys[1]):
            calculate['-'](arrNumValue[0], arrNumValue[1]);
            break;
        case (keys[2]):
            calculate['/'](arrNumValue[0], arrNumValue[1]);
            break;
        case (keys[3]):
            calculate['*'](arrNumValue[0], arrNumValue[1]);
            break;
    }
};

equally.addEventListener('click', forEqually);
















