var burger = document.getElementById('burger');
var open = document.getElementById('open');


open.addEventListener('click', function(){
  burger.classList.toggle('is-open');
});