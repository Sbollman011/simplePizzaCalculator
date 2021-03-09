var order = {
    toppings: 0,
    crust: 0,
    size:0,
    pSize:"small"
  };

function getCost(name) {
    var items = document.getElementsByName(name);
    if(name == 'toppings'){
        order.toppings = 0;
    }
    var size = document.getElementsByName('size');
    for(let i = 0; i < size.length; i++){
        if(size[i].checked == true){
            pSize = size[i].id;
        }
    }
    for(let i = 0; i < items.length; i++){
        if(items[i].checked == true){
            if(name == 'toppings'){
                if(pSize == 'medium'){
                     order.toppings += parseInt(items[i].value) * 2;
                }
                else if(pSize == 'large'){
                    order.toppings += parseInt(items[i].value) * 3;
               }
               else{
                    order.toppings += parseInt(items[i].value);

               }
            }
            if(name == 'crust'){
                order.crust = 0;
                order.crust = parseInt(items[i].value); 
            }
            if(name == 'size'){
                order.size = 0;
                order.size = parseInt(items[i].value); 
            }
        }
    }

    let total = order.crust + order.size + order.toppings;
    let result = document.getElementById("total");
    result.textContent = "Your Current Total: $" + total +".00";
    return total;
}


function checkToppings(id){
    let toppingsCount = 0;
    var toppings =  document.getElementsByName("toppings");

    var size = document.getElementsByName("size");
    let sizeFlag = false;
    for(let i = 0; i < size.length; i++){
        if(size[i].checked == true){
            sizeFlag = true;
        }
    }
    if(sizeFlag == true){
        for(let i = 0; i < toppings.length; i++){
            console.log(toppings[i].checked);
            console.log(toppings[i].name);

            if(toppings[i].checked == true){
                console.log(toppingsCount);
                toppingsCount++;
            }

            if(toppingsCount > 3){
                alert("You may only select 3 toppings.");
                document.getElementById(id).checked = false;
                i = toppings.length;
            }
        }
        getCost('toppings');
    }
    else{
        alert("Please choose a pizza size before toppings");
        let invalid = document.getElementById(id);
        invalid.checked = false;
    }
    
}

function placeOrder(){
   if(checkSelection('toppings') &&
    checkSelection('crust') &&
    checkSelection('sauce') &&
    checkSelection('size') &&
    checkSelection('cheese')){
    alert("Thank you for your order!");
    location.reload();
    }


}

function checkSelection(type){
    let typeFlag = false;

    let typeList = document.getElementsByName(type);

    for(let i  = 0; i < typeList.length; i++){
        if(typeList[i].checked == true){
            typeFlag = true;
        }
    }
    if(typeFlag == false){
        alert("Please select a " + type);
    }
    
    return typeFlag;
}