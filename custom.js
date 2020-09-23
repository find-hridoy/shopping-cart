// // Phone Plus Button
// const plusButton = document.getElementById("plusBtn");
// plusButton.addEventListener("click", function () {
//   const inputValue = document.getElementById("inputValue").value;
//   const inputNumber = parseFloat(inputValue);

//   const totalInputNumbar = inputNumber + 1;
//   document.getElementById("inputValue").value = totalInputNumbar;

//   const phonePrice = document.getElementById("phonePrice").innerText;
//   const phonePriceNumber = parseFloat(phonePrice);
//   const totalPhonePrice = phonePriceNumber + 1219;
//   document.getElementById("phonePrice").innerText = totalPhonePrice;

//   //   const subTotal = document.getElementById("subTotal").innerText;
//   //   const subTotalPrice = parseFloat(subTotal);
//   //   addSubTotal(subTotalPrice, totalPhonePrice);
//   //   const subTotalAmount = phonePriceNumber + 1219;
//   //   document.getElementById("subTotal").innerText = subTotalAmount;
// });

// // Phone Minus Button
// const minusButton = document.getElementById("minusBtn");
// minusButton.addEventListener("click", function () {
//   const inputValue = document.getElementById("inputValue").value;
//   const inputNumber = parseFloat(inputValue);

//   const totalInputNumbar = inputNumber - 1;
//   document.getElementById("inputValue").value = totalInputNumbar;
//   // if (totalInputNumbar == 1) {
//   //     document.getElementById("minusBtn").disabled = true;
//   // } else if (totalInputNumbar > 1) {
//   //     document.getElementById("minusBtn").disabled = false;
//   // };
//   const phonePrice = document.getElementById("phonePrice").innerText;
//   const phonePriceNumber = parseFloat(phonePrice);
//   const totalPhonePrice = phonePriceNumber - 1219;
//   document.getElementById("phonePrice").innerText = totalPhonePrice;

//   //   const subTotal = document.getElementById("subTotal").innerText;
//   //   const subTotalPrice = parseFloat(subTotal);
//   //   addSubTotal(subTotalPrice, totalPhonePrice * -1);
//   //   const subTotalAmount = phonePriceNumber - 1219;
//   //   document.getElementById("subTotal").innerText = subTotalAmount;
// });

// /**--------------------------------------------------------------------------*/
// // Case Working Area
// /**--------------------------------------------------------------------------*/
// // Case Plus Button
// const cPlusButton = document.getElementById("cPlusBtn");
// cPlusButton.addEventListener("click", function () {
//   const cInputValue = document.getElementById("cInputValue").value;
//   const cInputNumber = parseFloat(cInputValue);

//   const cTotalInputNumbar = cInputNumber + 1;
//   document.getElementById("cInputValue").value = cTotalInputNumbar;

//   const casePrice = document.getElementById("casePrice").innerText;
//   const casePriceNumber = parseFloat(casePrice);
//   const totalCasePrice = casePriceNumber + 59;
//   document.getElementById("casePrice").innerText = totalCasePrice;

//   //   const subTotal = document.getElementById("subTotal").innerText;
//   //   const subTotalPrice = parseFloat(subTotal);
//   //   addSubTotal(subTotalPrice, totalCasePrice);
//   //   const subTotalAmount = subTotalPrice + 59;
//   //   document.getElementById("subTotal").innerText = subTotalAmount;
// });

// // Phone Minus Button
// const cMinusButton = document.getElementById("cMinusBtn");
// cMinusButton.addEventListener("click", function () {
//   const cInputValue = document.getElementById("cInputValue").value;
//   const cInputNumber = parseFloat(cInputValue);

//   const cTotalInputNumbar = cInputNumber - 1;
//   document.getElementById("cInputValue").value = cTotalInputNumbar;

//   const casePrice = document.getElementById("casePrice").innerText;
//   const casePriceNumber = parseFloat(casePrice);
//   const totalCasePrice = casePriceNumber - 59;
//   document.getElementById("casePrice").innerText = totalCasePrice;

//   //   const subTotal = document.getElementById("subTotal").innerText;
//   //   const subTotalPrice = parseFloat(subTotal);
//   //   addSubTotal(subTotalPrice, totalCasePrice);
//   //   const subTotalAmount = subTotalPrice - 59;
//   //   document.getElementById("subTotal").innerText = subTotalAmount;
// });

// function addSubTotal(totalPhonePrice, totalCasePrice) {
//   const subTotalAmount = totalCasePrice + totalPhonePrice;
//   document.getElementById("subTotal").innerText = subTotalAmount;
//   return subTotalAmount;
// }
