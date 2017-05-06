//acesta determina marimea scriinului    detect ->redirect
(function(){

  function adapt(){

    var w = screen.availWidth;
    var h = screen.availHeight;

    console.log(w, h);
alert(w);
alert(h);
if (w < 1000) location = "mobile.html"
else location = "desctop.html"
  }
adapt()
})();
