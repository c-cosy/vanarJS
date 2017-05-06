// genereaza o harta
function genMap(){
var map = document.getElementById('map')
map.innerHTML='';
//personaj
var pr = parseInt(Math.random() * 9.1);
var pc = parseInt(Math.random() * 9.1);
for(var row = 0; row<10; row++){
  for(var col = 0; col<10; col++){
    var span = document.createElement('span')
    span.innerHTML = '#';
    //personaj
    if (pr == row && pc == col){
      span.id="character"
    }
    map.appendChild( span );
  }
  var br = document.createElement('br');
  map.appendChild( br );
 }
}
genMap();
