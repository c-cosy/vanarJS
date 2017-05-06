(function(){
//module
var messages = []; // joaca rolul de baza de date
function get_nickname(){
  return document.getElementById('nickname').value;
}
function get_message(){
  return document.getElementById('message').innerHTML;
}
function mesages_list(){
var ml = document.getElementById('mesages-list');
// ml.innerHTML = '';
  // ... ciclu prin for
  // <h4> nickname
  //<p> mesage
  for (var i in messages){
     var h4 = document.createElement('h4');
     var p = document.createElement('p');
     h4.innerHTML = messages[i].nickname;
     p.innerHTML = messages[i].mesages;
     ml.appendChild(h4);
     ml.appendChild(p);
  }
}

function send(){
  messages.push( {nickname: get_nickname(), message: get_message() } )
  console.log(messages);
  mesages_list();
}

//localstorange
function saveMessages(){

  localStorage.setItem('mesages-list', JSON.stringify (messages));
}



//export
window.get_nickname = get_nickname;
window.get_message = get_message;
window.send        = send;
// window.send        = saveMessages;
window.saveMessages = saveMessages;
})();
