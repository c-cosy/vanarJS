(function() {
  const service_url = "https://maps.googleapis.com/maps/api/geocode/"
  const format = "json"; //xml ...
  var searchfield = null;

  //page load
  window.onload = function() {
    searchfield = document.getElementById("search-field");
    searchfield.addEventListener('keyup', onTyping);
    searchfield.parentElement.onsubmit = function(e) {
      e.preventDefault();
    }

  };

  function onTyping(e) {
    // 1)code of the key
    // 2)
    if (e.keyCode == 13) {
      // e.preventDefault();
      // e.stopImmediatePropagation();
      var name = searchfield.value; // read the fields value
      var url = service_url + format + "?address=" + name;
      // ajax recuest
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
          var data = JSON.parse(xhr.responseText);

          if (data.status == "OK") {
            showData(data);
          } else {
            if (data.status == "Zero_result") {
              showEmpty();
            }
          }
        }
      }
      xhr.open("get", url);
      xhr.send();
    }

    // console.log("All good!")
  }

  function showData(data) {
    console.log(data)
    // console.log(data.results[0].formatted_address)
    console.log('var da = data.results.location')
    // coordonatele tarii
  }

  function showEmpty() {
    ///
  }
})()
