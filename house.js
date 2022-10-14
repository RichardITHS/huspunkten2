//Higher scope
let price;

//Get value from button click, to get the price for the house
function reply_click(clicked_id){
    document.getElementById("price").innerHTML = `Pris: ${clicked_id}`
    price = clicked_id;
}

function computeLoan(){
    let amount = price;
    let interest_rate = document.querySelector('.interest_rate').value;
    let months = document.querySelector('.months').value;

    //Convert % 
    let interest = (amount * (interest_rate * 0.01)) / months;
    
    //Calculate total payment
    let payments = ((amount / months) + interest).toFixed(2);
   

    //Show the monthly payment value to the visitors in html
    document.querySelector('#payment').innerHTML = payments + "kr";

}


//Function to show alert based on value input (months)
function order (){
    let a = document.querySelector('.months').value;
    if(a == 0){
        alert("Du har ej angett månader, vänligen gör detta så vi kan göra din order" + payment)
    }else{
        alert("Grattis till ditt nya hus till det låga månadspriset")
    }
}

