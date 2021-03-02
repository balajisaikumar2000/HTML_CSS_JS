var price;                      /* var is keyword ,var is used by interpreter to determine the that is variable */
var quantity;                  // quantity is variable name
var total;

price = 5;                    // assigning value to variable .Here "=" is used to assign the value
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');        // it searches for the id whose attribute name is 'cost' and it is named as el
el.textContent = '$' + total;                   // in this line variable '.' member operator is used to indicate that it should change the textcontent