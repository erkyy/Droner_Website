function Product(sku, name, price) {
    var self = this;
    self.sku = sku || "";
    self.name = name || "";
    self.price = price || 0;
}

function LineItem(product, quantity) {
    var self = this;
    self.product = new Product(product.sku, product.name, product.price);
    self.quantity = quantity || 0;
    self.totalCost = function () {
        return self.quantity * self.product.price;
    }
}

function Cart(lineItems) {
    var self = this;
    self.items = lineItems || [];
    self.totalItems = function () {
        return self.items.length;
    }
    self.totalCost = function () {
        self.items.map(function (item) {
            // Converts your items. into a list of prices
            return item.quantity * item.product.price;
        })
    }
}

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
        //cartArray.push(prodSku);
        //prisArray.push(cost);
        //prodArray.push(prodName);

        // get the existing cart if it exists, or create it if it doesn't
        var cart = window.cart || new Cart();
        // add a new item into the cart
        cart.items.push(new LineItem({ sku: prodSku, name: prodName, price: cost }, 1));
    
      // display to page

        var itemsElem = document.getElementById('cartItems');
        for (i of cart.items)
        {
            var item = cart.items[i];
            var row = document.createElement("tr");
            
            nameElem = document.createElement("td")
            nameElem.innerHTML = item.product.name;
            row.appendChild(nameElem)
            
            quantityElem = document.createElement("td")
            quantityElem.innerHTML = item.quantity;
            row.appendChild(quantityElem)
            
            priceElem = document.createElement("td")
            priceElem.innerHTML = item.totalCost;
            row.appendChild(priceElem)
        }
      
    // Add number of items in cart to cart button
    $('#myBtn .cart-count').html(cartArray.length);
    
    // Count number of times each product is in the cart
    var count = 0;
      
    for(var i = 0; i < cartArray.length; ++i){
      if(cartArray[i] == prodSku)
        count++;
    }
    console.log(count);

      
      
      
      
      //Summan
      
      //Räknar ut summan av alla priser
      function sum(input){
             
        if (toString.call(input) !== "[object Array]")
            return false;
            var total =  0;
            for(var i=0;i<input.length;i++)
            {                  
                if(isNaN(input[i])){
                    continue;
                }
                total += Number(input[i]);
            }
        return total;    
    }
      
      var totalSum = sum(prisArray);
      var totalSumPlusFrakt = totalSum + 99;
      document.getElementById("totalSum").innerHTML = totalSum;
      document.getElementById("totalSumPlusFrakt").innerHTML = totalSumPlusFrakt;
    
    
  });  
   
   
    
    
  //END  
});