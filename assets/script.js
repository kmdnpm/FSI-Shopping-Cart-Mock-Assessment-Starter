//Defining all variables
let quant = 0;
let tot = 0;

let decrease = document.getElementById('quantity-down');
let increase = document.getElementById('quantity-up');
let quantityTot = document.getElementById('totalQuantity');
let priceTot = document.getElementById('totalPrice');
let cancel = document.getElementById('remove');
let checkout = document.getElementById('btn-checkout');


//Evesdropper

increase.addEventListener('click',function(){
    
    if(quant >=0){
        quant = quant + 1
        totalQuantity.textContent = quant
    }else{
        totalQuantity.textContent = 0;
    }

    
})

decrease.addEventListener('click',function(){
    if(quant>0){
        quant = quant - 1;
        totalQuantity.textContent = quant;
    }else{
        totalQuantity.textContent = 0;
    }

})


cancel.addEventListener('click',function(){

    quant = quant*0
    totalQuantity.textContent = 0;
    totalPrice.textContent = 0;
})


checkout.addEventListener('click',function(){
    total = quant*15;
    totalPrice.textContent = total;
})