// player module
(function(){
  /////////////////////////////////DOM ELEMENTS////////////////////////
  var play_btn = document.querySelectorAll('#controls a')[2];
  var video = document.getElementById('player');
  var title = document.getElementsByClassName('player-wrapper')[0].children[0];
  var play_list_wrapper = document.getElementById('playlist');

  ///////////////////////////////// play list ////////////////////////
var play_list = [
  {
  title:"Bunny funny video :)",
  poster:"",
  video:""
},{
  title:"Bunny good Video :)",
  poster:"",
  video:""
},{
  title:"video OOOKKK :)",
  poster:"",
  video:""
}
];
function createPlayList(){
  play_list.forEach(  function(element){
    console.log(element.title)

    var li = document.createElement('li');
    var h4 = document.createElement('h4');
    var a = document.createElement('a');

  } );
}
createPlayList();
/////////////////////////////////////////////////////////////////////


/////////////////////////////////EVENT LISTTENER////////////////////////

video.addEventListener('play',function(e){
play_btn.firstElementChild.className='fa fa-pause';
title.innerHTML = "playing ...";
});
video.addEventListener('pause',function(e){
play_btn.firstElementChild.className='fa fa-play';
title.innerHTML = "paused ...";
});

// 2))
play_btn.addEventListener("click", function(e){ /// e<<<event
  e.preventDefault();
  if(play_btn.firstElementChild.className='fa fa-play')
  video.play();
  else {
    video.pause();
  }
});



})();
