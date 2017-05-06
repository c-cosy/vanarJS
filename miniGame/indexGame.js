// module
(function(){

  // map of the game
  // LEGEND
  // 0- AMPTY SPACE
  // 1- PLAYER
  var game_map = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  ];
// function that shiw the map
function show_map(){
  var m = document.getElementById('map');
  m.innerHTML = "";
for (var row=0; row<=9; row++){
  for (var col=0; col<=9; col++){
      if (game_map[row][col] == 1) {
        var class_name = "personaj";
      }else {class_name = ""};

    m.innerHTML += `<div class="square ${class_name}">${row} - ${col}</div>`;

  }
}


}
function move_right(){
  game_map[1][2]=1;
  game_map[1][1]=0;
  show_map();
}
  show_map();
/////////////////////EXPORTS - scoatem in spatiul global finctia /////////////////
  // exports to global SPACE
  window.move_right = move_right;
})();
