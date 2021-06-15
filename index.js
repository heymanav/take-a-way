// for default Price
function changePrice(el){
    var price = document.getElementById("price")
    //console.log(price)
    var el = document.getElementById(el);
    if(el.options[el.selectedIndex].value == "Tea"){
        price.value = 15;
    }else if(el.options[el.selectedIndex].value == "Coffee"){
        price.value = 20;
    }else if(el.options[el.selectedIndex].value == "Samosa"){
        price.value = 25;
    }else if(el.options[el.selectedIndex].value == "Tarri Poha"){
        price.value = 20;
    }
}

// for default Total Amount
function totalAmt(el){
    var price = document.getElementById("price")
    var totalAmt = document.getElementById("totalAmt")
    var el = document.getElementById(el);
    //console.log(el)
    if(el.options[el.selectedIndex].value == "1"){
        totalAmt.value = price.value * 1;
    }else if(el.options[el.selectedIndex].value == "2"){
        totalAmt.value = price.value * 2;
    }else if(el.options[el.selectedIndex].value == "3"){
        totalAmt.value = price.value * 3;
    }else if(el.options[el.selectedIndex].value == "4"){
        totalAmt.value = price.value * 4;
    }
}

// For on clicking submit button entries in table
function submit(){
    var row = 1;
    var Items = document.getElementById("sel1").value;
    var Price = document.getElementById("price").value;
    var Quantity = document.getElementById("sel2").value;
    var TotalAmt = document.getElementById("totalAmt").value;

    if(!Items || !Price || !Quantity || !TotalAmt ){
        alert("Please Fill the Order Correctly!");
        return;
    }

    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = Items;
    cell2.innerHTML = Price;
    cell3.innerHTML = Quantity;
    cell4.innerHTML = TotalAmt;
    row++;

    document.getElementById("price").value = ""
    document.getElementById("totalAmt").value = ""
    document.getElementById("sel1").value = ""
    document.getElementById("sel2").value = ""

    alert("Order Added Successfully!!!")
}


