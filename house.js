//Higher scope
let price;

//Get value from button and save the value to the price variable
function reply_click(clicked_id)
{
   //Passing value to HTML
   document.getElementById("price").innerHTML = 'Pris  '+ clicked_id;
   price = clicked_id;
};


function computeLoan(){
   //let amount gets the price from the global price variable and using it to calculate the 
   //price in this function

     let amount = price;
     let interest_rate = document.querySelector('#interest_rate').value;
     let months = document.querySelector('#months').value;
     //Convert procentage
     let interest = (amount * (interest_rate * 0.01)) / months;
        
       let payment = ((amount / months) + interest).toFixed(2); //calculate monthly payment
   
       //regedit to add a comma after every three digits
       payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 


   
   //"innerHTML" will help you to see the information in the webpage
       document.querySelector('#payment').innerHTML = `Månadskostnad = ${payment} kr`
   
   }

  
   function order (){
      let a = document.getElementById('months').value;
      if(a == 0){
         alert("Säker på att du ej önskar beställa?")
      }else{
        alert("Grattis till ditt nya hus!!")
      }
      }
  
