var radioBtns = document.querySelector(".billItemTypeWithSettings");
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings")
var addTheBillBtn = document.querySelector(".addTheBillBtn");

var updateSettings = document.querySelector(".updateSettings");
  
  let settingsBill = BillWithSettings();
  
  updateSettings.addEventListener("click", function(){
    settingsBill.setCallCost(Number(callCostSetting.value));
    settingsBill.getCallCost();
    settingsBill.setSmsCost(Number(smsCostSetting.value));
    settingsBill.getSmsCost();
    settingsBill.setWarning(Number(warningLevelSetting.value));
    settingsBill.getWarning();
    settingsBill.setCritical(Number(criticalLevelSetting.value));
    settingsBill.getCritical();
    colours();
  });
  
  addTheBillBtn.addEventListener("click", function(){
    var billItemTypeWithSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (billItemTypeWithSettings) {
      var selectedBtn = billItemTypeWithSettings.value;
      settingsBill.billType(selectedBtn);

    callTotalSettings.innerHTML = settingsBill.getTotalCallCost().toFixed(2);
    smsTotalSettings.innerHTML = settingsBill.getTotalSmsCost().toFixed(2);
    totalSettings.innerHTML = settingsBill.getTotalCost().toFixed(2);
    colours();
    }
  });

  function colours() {
    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("danger");
    totalSettings.classList.add(settingsBill.className());
    
  }
  