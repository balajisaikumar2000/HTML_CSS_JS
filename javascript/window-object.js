var msg = '<h2>browser window</h2> '                  //width of browser window   //this will apply to only the result page which will be less than screen size
msg += '<p>width:' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';                             //height of browser window
msg+= '<h2>history</h2><p>items: ' + window.history.length + '</p>';         /* these 3,4,5 lines are child objects*/
msg +='<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';                     //total screen size
var el = document.getElementById('info');
el.innerHTML = msg;
alert( 'Current page: '+ window.location);            //a pop-up alert page will raise