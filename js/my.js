//Ta bort tableRow.
      function deleteRow(r) {
            var i = r.parentNode.parentNode.rowIndex;
            document.getElementById("cartTable").deleteRow(i);
          
        }

$(document).ready(function () {
    
    
    
    // Variables
 
    var cartArray = [];
    var prisArray = [];
    var prodArray = [];
    var antalArray = [];
    var cost;
    var prodName;
    var prodSku
    
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
    
    
  $('.prod-btn').click(function(){

      // Data variables for sku, price, and product name
      prodSku = $(this).data('sku');
      cost = $(this).data('pris');
      prodName = $(this).data('prod');

      // Push items to arrays
      cartArray.push(prodSku);
      prisArray.push(cost);
      prodArray.push(prodName);

      console.table(prisArray);
      
      // Add number of items in cart to cart button
      $('#myBtn .cart-count').html(cartArray.length);

      // Count number of times each product is in the cart
      var count = 0;
      for(var i = 0; i < prodArray.length; ++i){
          if(prodArray[i] == prodName)
              count++;
      }
      
      
      //RÄKNA UT SUMMAN
    
      var sum = 0;
      $.each(prisArray,function() {
          sum += this;
      });
      
    //Display till sidan
      document.getElementById("totalSum").innerHTML = sum;
      document.getElementById("totalSumPlusFrakt").innerHTML = (sum + 99);
      
      
      
      //Spara sum variabel, use later
      if (typeof(Storage) !== "undefined") {
          // Store
          localStorage.setItem("sumStr", sum + 99);
      } else {
          document.getElementById("sumToPayID").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
      
      //Skapa ny tablerow för varje ny produkt
    var table = document.getElementById("cartTable");
    var row = cartTable.insertRow(-1);
    var cell1 = row.insertCell(0); //vara
    var cell2 = row.insertCell(1); //antal
    var cell3 = row.insertCell(2); //pris
    var cell4 = row.insertCell(3); //ta bort
      
    for(var i=0; i<cartArray.length; i++) {
        cell1.innerHTML = prodArray[i]; //Produkt
        cell2.innerHTML = 1; //Antal
        cell4.innerHTML = '<button class="xBtn" id="btn" name="btn" onclick="deleteRow(this);"><font size="5"> &times; </font></button>'; //Ta bort
    }
      
    for(var i=0;i<prisArray.length;i++) {
        cell3.innerHTML = prisArray[i] + " kr"; //Pris
    }
      
    //CART END------------------------------------------------------------------
  });  
   
    
  //END READY
});