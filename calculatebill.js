function calculateBill(){
    
    function setBill(billType){
        var billTotal = 0;
        var billItems = billType.split(",");
        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
            }
        }
        return billTotal.toFixed(2);
    }

    function colours(billType){
        if(setBill(billType) >= 20 && setBill(billType) < 30){
            return "warning";
        }

        else if (setBill(billType) >= 30){
            return "danger"
        }
    }

    return {
        setBill,
        colours,
    }
}