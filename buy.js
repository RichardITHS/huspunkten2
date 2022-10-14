
//Show Navbar
//targeting toggle-botton and the first array (0)
const toggleButton = document.getElementsByClassName('toggle-button')[0]
//targeting navbar-links and the first array (0)
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
//Listen on click on toggle button then activate the navbarlinks list
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})



//Fetch house data
fetch('/data/house.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    let content = '';

   
    //Taking the data and mapping the information
    data.map(p => {

  

    //Proceeding to "paint my HTML Dom"
      content += `
     
       
   
                 <div class="card" style="width: 14rem;">
                  <img src="${p.image}" class="card-img-top img-fluid" alt="house">
                      <div class="card-body">
                          <h1 class="card-title" id="itemName">${p.houseName}</h1>
                          <p class="card-text" id="itemDesc">${p.size}</p>
                          <p class="card-price">${p.price} kr</p>
                          <a href="hus${p.id}.html" class="btn btn-primary">Utforska</a>
                      </div>
                  </div>    
                
     
      `
     


    });
    

    document.querySelector("#houses").innerHTML = content;
    

}).catch (error => {
    console.log(error)
})

