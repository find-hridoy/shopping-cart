const phoneInput = document.getElementById("phone-input");
const phonePrice = document.getElementById("phone-price");
const caseInput = document.getElementById("case-input");
const casePrice = document.getElementById("case-price");

//Phone
const phoneIncrease = () => {
    handlePhoneChange(true);
}
const phoneDecrease = () => {
    handlePhoneChange(false);
}
const handlePhoneChange = (IsIncrease) => {
    const phoneCount = parseFloat(phoneInput.value);
    let newPhoneCount = phoneCount;
    if (IsIncrease === true) {
        newPhoneCount = phoneCount + 1;
    }
    if (IsIncrease === false && phoneCount > 0) {
        newPhoneCount = phoneCount - 1;
    }
    phoneInput.value = newPhoneCount;
    const phoneUpdatePrice = newPhoneCount * 1219;
    phonePrice.innerHTML = phoneUpdatePrice;
}

//Case
const caseIncrease = () => {
    handleCaseChange(true);
}
const caseDecrease = () => {
    handleCaseChange(false);
}

const handleCaseChange = (IsIncrease) => {
    const caseCount = parseFloat(caseInput.value);
    let newCaseCount = caseCount;
    if (IsIncrease === true) {
        newCaseCount = caseCount + 1;
    }
    if (IsIncrease === false && caseCount > 0) {
        newCaseCount = caseCount - 1;
    }
    caseInput.value = newCaseCount;
    const caseUpdatePrice = newCaseCount * 59;
    casePrice.innerHTML = caseUpdatePrice;
}