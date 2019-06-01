$(document).ready(function () {
    
    function myFunction() {
        
        console.log("SAHDJSHAKDAH WORK!!!");
        
    }
    
    // Variables
 
    var cartArray = [];
    var prisArray = [];
    var prodArray = [];
    var antalArray = [];
    var cost;
    var prodName;
    var prodSku;
    var sum = 0;
    
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
    
    document.getElementById("totalSumPlusFrakt").innerHTML = (sum + 99);
    
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
    
    for(var i = 0; i < prisArray.length; i++) {

        sum += prisArray[i]
    }
    
    //Display till sidan
      document.getElementById("totalSum").innerHTML = sum;
      document.getElementById("totalSumPlusFrakt").innerHTML = (sum + 99);
      
      console.log(totalSumPlusFrakt);
      
      //Spara sum till checkout
      
      
      //Skapa ny tablerow för varje ny produkt
    var table = document.getElementById("cartTable");
    var row = cartTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
      
    for(var i=0;i<prodArray.length;i++) {
        cell1.innerHTML = prodArray[i];
        cell2.innerHTML = "1"
        cell4.innerHTML = '<button id="btn" name="btn"><font size="5"> &times; </font></button>';
    }
      
    for(var i=0;i<prisArray.length;i++) {
        cell3.innerHTML = prisArray[i] + " kr";
    }
      
    //CART END------------------------------------------------------------------
  });  
   
    
  //END  
});