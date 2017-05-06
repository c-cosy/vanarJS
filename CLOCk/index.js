// module clock
(function(){


      function tick(){
      //aflam ora curenta current time
      var d = new Date();
      var hh = d.getHours();
      var mm = d.getMinutes();
      var ss = d.getSeconds();
        if (ss < 10) ss= "0" + ss;
        if (mm < 10) mm= "0" + mm;
        if (hh < 10) hh= "0" + hh;
      //combine
        var output = `${hh}:${mm}:${ss}`;
        var h1 = document.getElementsByTagName('h1')[0];

        h1.innerHTML = output;
    //   console.clear()
    //   console.log( output );
      }
    setInterval (tick, 1000 );

})()
//
