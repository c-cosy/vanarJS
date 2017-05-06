(function(){

var slides = [
  {
    image: "images/imagg1.jpg",
    url: "",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    image: "images/imagg2.jpg",
    url: "",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },{
    image: "images/imagg3.jpg",
    url: "",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
];
// console.log(slides[2].image );
var 
var slideshow = null;
var img       = null;
var h2        = null;
 //////////////////////////////// CONFIGURATION //////////////////////////////////
function l(text){
console.log(text);
}
 //////////////////////////////// ACTIONS //////////////////////////////////
// create the DOm structure
function load(){
  l("loading slider !!!");
  slideshow = document.getElementById("slideshow");
  slideshow.innerHTML = "";
  img = document.createElement('img');
  h2 = document.createElement('h2');
  slideshow.appendChild(img);
  slideshow.appendChild(h2);

  //autoplay
  setInterval( show_slide, 3000 );
}
// display the first slide
function show_slide(){
  img.src = slides[0].image;
  h2.innerHTML = slides[0].title;
    h2.className = "";
    ///
    setTimeout(
      function(){h2.className = "animated bounce"},50
        );


  //change places
  slides.unshift(slides.pop() );
}

 //////////////////////////////// EXPORTS //////////////////////////////////
window.load = load;
window.show_slide = show_slide;

})()
