var to = 'To You!';
var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {

  present.addEventListener("click", function(e){
  document.getElementById('music').play();
  present.classList.toggle("open");
  document.getElementById('card').classList.add('card-show');

  present.classList.toggle("close");
  }, false);
  nametag.innerText = to;
}

init();
