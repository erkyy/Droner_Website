//Ta bort tableRow.
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("cartTable").deleteRow(i);
}

$(document).ready(function () {
    
  console.log(localStorage);
      
  // Variables

  var cartArray = [];
  var prisArray = [];
  var prodArray = [];
  var antalArray = [];
  var cost;
  var prodName;
  var prodSku;
  var prodPris;
  var sum = 0;
  var cartTotal = 0;
  var sumStorage = localStorage.getItem('sum');
  
  $('#sumToPayID').html(sumStorage);
    
  // SLIDER START-----------------------------------------------------------------
  
  $('.bxslider').bxSlider({
      mode: 'horizontal',
      auto: true,
  });
  $('.menu-togglr').on('click', function () {
      $('#mainav').slideToggle('fast');
      $(this).toggleClass('active');
  });
  
  //SLIDER END----------------------------------------------------------------    
  
  
  //CART START------------------------------------------------------------------
  
  // BECAREFUL WITH THIS. IT CAN FILL UP YOUR CACHE QUICKLY
  // Look at this first answer for some guidance on how to edit your storage: https://stackoverflow.com/questions/16083919/push-json-objects-to-array-in-localstorage
  // You can start using this to serve up the cart data instead of loading it with the for loop at the bottom.
/*
  var a = [];
  a.push(JSON.parse(localStorage.getItem('session')));
  localStorage.setItem('session', JSON.stringify(a));
*/

/*
  function SaveDataToLocalStorage(data){
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('session'));
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', JSON.stringify(a));
  }
*/
    
  $('.prod-btn').click(function(){

      // Data variables for sku, price, and product name
      prodSku = $(this).data('sku');
      cost = $(this).data('pris');
      prodName = $(this).data('prod');

      // Push items to arrays
      cartArray.push([cost, prodSku, prodName]);
      prisArray.push(cost);
      //prodArray.push(prodName);

      console.table(prisArray);
      console.table(cartArray);
      
      // Add number of items in cart to cart button
      $('#myBtn .cart-count').html(cartArray.length);

      // Count number of times each product is in the cart
/*
      var count = { };
      for (var i = 0, j = prodArray.length; i < j; i++) {
         count[prodArray[i]] = (count[prodArray[i]] || 0) + 1;
      }
*/
      
      // Group like products in the cart
      var occurrences = { };
      for (var i = 0, j = cartArray.length; i < j; i++) {
         occurrences[cartArray[i]] = (occurrences[cartArray[i]] || 0) + 1;
      }
      
      //console.log(count);
      console.log(occurrences);
      
      //RÄKNA UT SUMMAN
      sum = prisArray.reduce((a, b) => a + b, 0);
      //SaveDataToLocalStorage(sum + 99);
      cartTotal = sum + 99;
      localStorage.setItem('sum', cartTotal);
      console.log(localStorage); 
            
      //Display till sidan
      document.getElementById("totalSum").innerHTML = sum;
      document.getElementById("totalSumPlusFrakt").innerHTML = (sum + 99);
      
      //Skapa ny tablerow för varje ny produkt
      var table = document.getElementById("cartTable");
      var row = cartTable.insertRow(-1);
      var cell1 = row.insertCell(0); //vara
      var cell2 = row.insertCell(1); //antal
      var cell3 = row.insertCell(2); //pris
      var cell4 = row.insertCell(3); //ta bort
        
      for(var i=0; i<cartArray.length; i++) {
        cell1.innerHTML = cartArray[i][2]; //Produkt
        cell2.innerHTML = 1; //Antal
        cell4.innerHTML = '<button class="xBtn" name="btn" data-price="' + cartArray[i][0] + '" onclick="deleteRow(this);"><font size="5"> &times; </font></button>'; //Ta bort
        cell3.innerHTML = cartArray[i][0] + " kr"; //Pris
      }
      
    //CART END------------------------------------------------------------------
  });  

  $(document).on('click', '.xBtn', function(){
    prodPris = parseInt($(this).data('price'));
    currentSum = parseInt(sum); 
    sum = currentSum - prodPris;
    cartTotal = sum + 99;
    document.getElementById("totalSum").innerHTML = sum;
    document.getElementById("totalSumPlusFrakt").innerHTML = (sum + 99);
    localStorage.setItem('sum', cartTotal);
    console.log(localStorage);
  });  
    
  //END READY
});