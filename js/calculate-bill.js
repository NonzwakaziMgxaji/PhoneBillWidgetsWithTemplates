var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElem = document.querySelector(".billTotal");
var billStringElem = document.querySelector(".billString");

let bill = calculateBill();
function calculateBtnClicked() {


    billTotalElem.innerHTML = bill.setBill(billStringElem.value);
    billTotalElem.classList.remove("warning");
    billTotalElem.classList.remove("danger");
    billTotalElem.classList.add(bill.colours(billStringElem.value));
}

calculateBtn.addEventListener("click", calculateBtnClicked);




