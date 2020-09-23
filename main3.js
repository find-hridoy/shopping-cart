const phoneInput = document.getElementById("phone-input");
const phonePrice = document.getElementById("phone-price");
const caseInput = document.getElementById("case-input");
const casePrice = document.getElementById("case-price");

//Phone
const phoneIncrease = () => {
    const phoneCount = parseFloat(phoneInput.value);
    const newPhoneCount = phoneCount + 1;
    phoneInput.value = newPhoneCount;
    const phoneUpdatePrice = newPhoneCount * 1219;
    phonePrice.innerHTML = phoneUpdatePrice;
}
const phoneDecrease = () => {
    if (phoneInput.value > 0) {
        const phoneCount = parseFloat(phoneInput.value);
        const newPhoneCount = phoneCount - 1;
        phoneInput.value = newPhoneCount;
        const phoneUpdatePrice = newPhoneCount * 1219;
        phonePrice.innerHTML = phoneUpdatePrice;
    }
}

//Case
const caseIncrease = () => {
    const caseCount = parseFloat(caseInput.value);
    const newCaseCount = caseCount + 1;
    caseInput.value = newCaseCount;
    const caseUpdatePrice = newCaseCount * 59;
    casePrice.innerHTML = caseUpdatePrice;
}
const caseDecrease = () => {
    if (caseInput.value > 0) {
        const caseCount = parseFloat(caseInput.value);
        const newCaseCount = caseCount - 1;
        caseInput.value = newCaseCount;
        const caseUpdatePrice = newCaseCount * 59;
        casePrice.innerHTML = caseUpdatePrice;
    }
}