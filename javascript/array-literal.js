var colors;
colors = ['white','black','custom'];

/* var el = document.getElementById('colors');
el.textContent = colors[0]; */
//Update the third item in the array
colors[2] = 'beige';

//Get the element with an id colors
var el = document.getElementById('colors');

//Replace with third  item from the array
el.textContent = colors[2];