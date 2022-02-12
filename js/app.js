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

document.getElementById('key-pad').addEventListener('click', function (event) {
    console.log("any key fucked")
});