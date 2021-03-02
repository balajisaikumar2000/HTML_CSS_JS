var inStock;
var shipping;
inStock = true;
shipping = false;

/* update variable */
inStock = false;
shipping = true;
var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;