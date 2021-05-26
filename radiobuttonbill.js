function radiobuttonbill(){
    var callsTotal = 0;
    var smssTotal = 0;
    
    function radioBill(checkedRadioBtn) {
            if (checkedRadioBtn === "call") {
                callsTotal += 2.75;
            }
            else if (checkedRadioBtn === "sms") {
                smssTotal += 0.75;
            }
        }

    function callTotal(){
        return callsTotal;
    }

    function smsTotal(){
        return smssTotal;
    }

    function Total(){
        return callsTotal + smssTotal;
    }

    function colours(){
        if(Total() >= 30 && Total() < 50){
            return "warning";
        }

        else if (Total() >= 50){
            return "danger"
        }
    }

    return {
        radioBill,
        callTotal,
        smsTotal,
        Total,
        colours,
    }

}