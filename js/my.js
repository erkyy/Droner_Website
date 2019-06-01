$(document).ready(function () {
  
  // Variables
  var cartArray = [];
  var prisArray = [];
  var prodArray = [];
  var cost;
  var prodName;
  var prodSku;
  
  $('.bxslider').bxSlider({
      mode: 'horizontal',
      auto: true,
  });
  $('.menu-togglr').on('click', function () {
      $('#mainav').slideToggle('fast');
      $(this).toggleClass('active');
  });
  
      
  $('.prod-btn').click(function(){
    // Data variables for sku, price, and product name
    prodSku = $(this).data('sku');
    cost = $(this).data('pris');
    prodName = $(this).data('prod');
    
    // Push items to arrays
    cartArray.push(prodSku);
    prisArray.push(cost);
    prodArray.push(prodName);
    
    // Console table results
    console.table(cartArray);
    console.table(prisArray);
    console.table(prodArray);
    
    // Add number of items in cart to cart button
    $('#myBtn .cart-count').html(cartArray.length);
    
    // Count number of times each product is in the cart
    var count = 0;
    for(var i = 0; i < prodArray.length; ++i){
      if(prodArray[i] == prodName)
        count++;
    }
    console.log(count);
    
  });  
   
   
    
});

$("#buttonSubmit").click(function() {
  console.log('fire')
  globalCartArray.name = this.value
  sessionStorage.setItem('myArray', globalCartArray);
  console.log(globalCartArray)
});