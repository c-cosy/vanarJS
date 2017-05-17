(function() {
  //main module
  var gameMap = null;

  //initialize canvas
  function init() {
    // var canvas = document.getElementsByTagName("canvas")[0];
    var canvas = document.getElementById("myCanvas_1");
    window.gameScreen = canvas.getContext('2d'); // acesta e lincul la canvas pentru a scrie/desena
    window.step_grid = 50;
    gameMap = new Array(10).fill(new Array(10).fill(null));
    drawGrid();
    test();
    Int();
    //loadImage();
    //  aruncaImgAleator();
  };

  // test function
  function test() {
    // gameScreen.beginPath(); //new figure
    // gameScreen.arc(250,250,100,1.5*Math.PI,2*Math.PI);
    // gameScreen.stroke(); //border



    addComponent(new Apple(1, 1, "img/apple-icon.png", 10));
    addComponent(new Apple(5, 7, "img/apple-icon.png", 10));
    renderMap();
    //     apple.onload = function(){
    //     gameScreen.drawImage(apple,1,1);
    //   }
    //   apple.src = "img/apple-icon (1).png"
  }

  function addComponent(component) {
    gameMap[component.row][component.col] = component;
  }
  window.onload = init();


  // ------------------ new random text--------------------


  function Int() {
    var p = getRandomInt(0, 10)
    var x, y;
    // var apple_1 = new Image();
    gameScreen.beginPath();
    gameScreen.fillStyle = "rgba(255, 0, 0, 0.5)"; // culoarea dreptunghiului
    gameScreen.fillText("Hello World!", x, y);
    gameScreen.fillRect(x, y, step_grid, step_grid); //deseneaza un dreptunchi
    // gameScreen.drawImage(apple_1,x,y);
    // apple_1.src = "img/apple-icon.png";
    function getRandomInt(min, max) {
      var x1 = Math.floor(Math.random() * (max - min)) + min;
      var y1 = Math.floor(Math.random() * (max - min)) + min;
      x = x1 * step_grid; //*50
      y = y1 * step_grid; //*50
      // console.log(x,y);
    };
    // console.log(x,y);
  }
  // ------------------ / new random text--------------------


  //-------------------aruncaImgAleator--------------------------
  function aruncaImgAleator() {
    canvas.onclick = appleM;
    // var appleM = new Image();
    // apple.innerHTML =
    var x;
    var y;
    appleM.onload = function() {
      gameScreen.drawImage(appleM, x, y);
      var p = getRandomInt(0, 10);

      function getRandomInt(min, max) {
        var x1 = Math.floor(Math.random() * (max - min)) + min;
        var y1 = Math.floor(Math.random() * (max - min)) + min;
        x = x1 * step_grid; //*50
        y = y1 * step_grid; //*50
      };

    };
    appleM.src = "img/apple-icon.png";
  };
  //-------------------/ aruncaImgAleator--------------------------

  //----------------- drawGrid -----------------------------
  function drawGrid() {

    var canvas = document.getElementById("myCanvas_1");
    var ctx = canvas.getContext("2d");
    var max_y = canvas.getAttribute("height"); // pentru desenarea coloanelor aceasta var este "y", iar pentru linie el ia functia de "x"
    var min_y = 0; // pentru desenarea coloanelor aceasta var este "y", iar pentru linie el ia functia de "x"
    // ciclul de desenarea retelei
    for (i = 0; i <= 10; i++) {
      var x = step_grid * i;
      // desenarea coloanelor
      ctx.moveTo(x, min_y);
      ctx.lineTo(x, max_y);
      // desenarea liniilor
      ctx.moveTo(min_y, x);
      ctx.lineTo(max_y, x);
      ctx.stroke();
    };
  };

  // renders the map in canvas
  function renderMap() {
    drawGrid();
    for (var r in gameMap) {
      for (var c in gameMap[r]) {
        var component = gameMap[r][c];
        if (component !== null) {
          //drow the component
          component.render();
        } else {
          //nothing
        }
      }
    }
  };



})();
//Wall - perete
