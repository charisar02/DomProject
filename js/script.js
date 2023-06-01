var totalAmount = document.querySelectorAll(".totalAmount");
var amountByItem = document.querySelectorAll("input[name=totalTxtPrice]");
var totalItem = document.querySelector(".totalQuantity");
var itemCountByEachProd = document.querySelectorAll("input[name=item]");

document.querySelectorAll(".bi-cart-plus-fill").forEach(item =>{
    item.addEventListener("click",function(){
        addItemToCart(item,"ICON");
    })
})

document.querySelectorAll(".bi-cart-dash").forEach(item =>{
    item.addEventListener("click",function(){
        removeItemFromCart(item);
    })
})

document.querySelectorAll("input[name=item]").forEach(item =>{
    item.addEventListener("input",function(){
        addItemToCart(item,"INPUT");
    })
})


function addItemToCart(item,callFrom) {
    var closetTr = item.closest("td").parentNode;
    var closestPrice = closetTr.cells[2].querySelector("input[name=txtPrice]").value;
    var closestTotalPrice = closetTr.cells[2].querySelector("input[name=totalTxtPrice]");

    var itemCount = item.closest("td").querySelector("input[name=item]");
    if (callFrom == "ICON") {
        itemCount.value = parseFloat(itemCount.value)+1;
        /* itemCount.value = parseFloat(itemCount.value) >0 ? parseFloat(itemCount.value)+1 : 0; */
    }else{
        /* itemCount.value = parseFloat(itemCount.value); */
        itemCount.value = parseFloat(itemCount.value) >0 ? parseFloat(itemCount.value) : 0;
    }
    
   /*  itemCount.value = parseFloat(itemCount.value) >0 ? parseFloat(itemCount.value)+1 : 0; */

    closestTotalPrice.value = parseFloat(closestPrice) * parseFloat(itemCount.value);
    
    var tempTotalAmount = 0;
    amountByItem.forEach(item => {
        tempTotalAmount = tempTotalAmount + parseFloat(item.value);
    })

    totalAmount.forEach(item => {
       item.innerHTML =  tempTotalAmount; 
    })

    var tempItemCount = 0;
    itemCountByEachProd.forEach(item =>{
        tempItemCount = tempItemCount + parseFloat(item.value);
    })

    totalItem.innerHTML = tempItemCount
    
}



function removeItemFromCart(item) {
    var closetTr = item.closest("td").parentNode;
    var closestPrice = closetTr.cells[2].querySelector("input[name=txtPrice]").value;
    var closestTotalPrice = closetTr.cells[2].querySelector("input[name=totalTxtPrice]");

    var itemCount = item.closest("td").querySelector("input[name=item]");

    itemCount.value = parseFloat(itemCount.value) >0 ? parseFloat(itemCount.value)-1 : 0;

    closestTotalPrice.value = parseFloat(closestPrice) * parseFloat(itemCount.value);
    
    var tempTotalAmount = 0;
    amountByItem.forEach(item => {
        tempTotalAmount = tempTotalAmount + parseFloat(item.value);
    })

    totalAmount.forEach(item => {
       item.innerHTML =  tempTotalAmount; 
    })

    var tempItemCount = 0;
    itemCountByEachProd.forEach(item =>{
        tempItemCount = tempItemCount + parseFloat(item.value);
    })

    totalItem.innerHTML = tempItemCount
    
}