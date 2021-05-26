function textInputBill(){
    var callBill = 0;
    var smsBill = 0;
    
    function setBill(billType){
        if(billType === "call"){
            callBill += 2.75;
        }

        else if (billType === "sms"){
            smsBill += 0.75;
        }
    }

    function callTotal(){
        return callBill;
    }

    function smsTotal(){
        return smsBill;
    }

    function overallTotal(){
        return smsBill + callBill;
    }

    function colours(){
        if(overallTotal() >= 30 && overallTotal() < 50){
            return "warning";
        }

        else if (overallTotal() >= 50){
            return "danger"
        }
    }

    return {
        setBill,
        callTotal,
        smsTotal,
        overallTotal,
        colours,
    }

}