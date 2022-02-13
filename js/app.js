function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log('abbey yearrrr, again counting', pin);
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
};

// document.getElementById('key-pad').addEventListener('click', function (event) {
//     const number = event.target.innerText;
//     const calcInput = document.getElementById('typed-numbers');
//     if (isNaN(number)) {
//         if (number == 'c') {
//             calcInput.value = '';
//         }
//     }
//     else {
//         const previousNumber = calcInput.value;
//         const newNumber = previousNumber + number;
//         calcInput.value = newNumber;
//     }

// });

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});


function verifyPin() {
    // console.log('going to verify');
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMassage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMassage.style.display = "block";
        failError.style.display = 'none';
    } else {
        failError.style.display = 'block';
        successMassage.style.display = "none";

    }
};
