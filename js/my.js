$(document).ready(function () {
    
    // Variables
 
    var cartArray = [];
    var prisArray = [];
    var prodArray = [];
    var antalArray = [];
    var cost;
    var prodName;
    var prodSku;
    
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

      console.log(prisArray);
      console.log(prodArray);
      
      // Add number of items in cart to cart button
      $('#myBtn .cart-count').html(cartArray.length);

      // Count number of times each product is in the cart
      var count = 0;
      for(var i = 0; i < prodArray.length; ++i){
          if(prodArray[i] == prodName)
              count++;
      }
      
      
      //RÄKNA UT SUMMAN
    
    var sum = 0
    
    for(var i = 0; i < prisArray.length; i++) {

        sum += prisArray[i]
    }
    
    //Display till sidan
      document.getElementById("totalSum").innerHTML = sum;
      document.getElementById("totalSumPlusFrakt").innerHTML = (sum + 99);
      
      //Skapa ny tablerow för varje ny produkt
    var table = document.getElementById("cartTable");
    var row = cartTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = prodArray[0];
    cell2.innerHTML = "";
    cell3.innerHTML = prisArray[0] + " kr";
      
    //CART END------------------------------------------------------------------
  });  
   
    
  //END  
});