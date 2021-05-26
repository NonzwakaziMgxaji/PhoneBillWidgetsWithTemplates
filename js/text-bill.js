var billTypeTextElem = document.querySelector(".billTypeText");
var AddToBillBtnElem = document.querySelector(".addToBillBtn");
var callTotalOneElem = document.querySelector(".callTotalOne"); 
var smsTotalOneElem = document.querySelector(".smsTotalOne");
var totalOneElem = document.querySelector(".totalOne");

// get a reference to template
var textTotalsElem = document.querySelector(".totalsTemplate").innerHTML;

// use the compiled the template
var textTotalsCompile = Handlebars.compile(textTotalsElem);


let bills = textInputBill();

function textBillTotal(){

    bills.setBill(billTypeTextElem.value.trim());
    
    callTotalOneElem.innerHTML = textTotalsCompile({callTotal: bills.callTotal().toFixed(2)});
    smsTotalOneElem.innerHTML = textTotalsCompile({smsTotal: bills.smsTotal().toFixed(2)});
    totalOneElem.innerHTML = textTotalsCompile({Total: bills.overallTotal().toFixed(2)});
        
    totalOneElem.classList.remove("warning");
    totalOneElem.classList.remove("danger");
    totalOneElem.classList.add(bills.colours());
      
}  
AddToBillBtnElem.addEventListener("click", textBillTotal);