var radioBtn = document.querySelector(".billItemTypeRadio")
var radioAddBtn = document.querySelector(".radioBillAddBtn")
var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");

// get a reference to template
var radioTotalsElem = document.querySelector(".totalsTemplate").innerHTML;

// use the compiled the template
var radioTotalsCompile = Handlebars.compile(radioTotalsElem);

let billR = radiobuttonbill();
function radioBill() {
    
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        billR.radioBill(checkedRadioBtn.value);
    }
    
    callTotalTwoElem.innerHTML = textTotalsCompile({callTotal: billR.callTotal().toFixed(2)});
    smsTotalTwoElem.innerHTML = textTotalsCompile({smsTotal: billR.smsTotal().toFixed(2)});
    totalTwoElem.innerHTML = textTotalsCompile({Total: billR.Total().toFixed(2)});
    
    totalTwoElem.classList.remove("warning");
    totalTwoElem.classList.remove("danger");
    totalTwoElem.classList.add(billR.colours());
}
radioAddBtn.addEventListener("click", radioBill);