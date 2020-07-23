// Plus Button
const plusButton = document.getElementById("plusBtn");
plusButton.addEventListener("click", function () {
    const inputValue = document.getElementById("inputValue").value;
    const inputNumber = parseFloat(inputValue);

    const totalInputNumbar = inputNumber + 1;
    document.getElementById("inputValue").value = totalInputNumbar;

    const phonePrice = document.getElementById("phonePrice").innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    const totalPhonePrice = phonePriceNumber + 1219;
    document.getElementById("phonePrice").innerText = totalPhonePrice;

});

// Minus Button
const minusButton = document.getElementById("minusBtn");
minusButton.addEventListener("click", function () {

    const inputValue = document.getElementById("inputValue").value;
    const inputNumber = parseFloat(inputValue);

    const totalInputNumbar = inputNumber - 1;
    document.getElementById("inputValue").value = totalInputNumbar;
    // if (totalInputNumbar == 1) {
    //     document.getElementById("minusBtn").disabled = true;
    // } else if (totalInputNumbar > 1) {
    //     document.getElementById("minusBtn").disabled = false;
    // };
    const phonePrice = document.getElementById("phonePrice").innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    const totalPhonePrice = phonePriceNumber - 1219;
    document.getElementById("phonePrice").innerText = totalPhonePrice;
});