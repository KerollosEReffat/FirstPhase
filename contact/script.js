let Preloader = document.getElementById("Preloader");

window.addEventListener("load",e => Preloader.style.display = "none");

(function () {

    var clockElement = document.getElementById( "clock" );
  
    function updateClock ( clock ) {
      clock.innerHTML = new Date().toLocaleTimeString();
    }
  
    setInterval(function () {
        updateClock( clockElement );
    }, 1000);
  
}());








function addClass() {
  document.body.classList.add("sent");
}
const sendLetter = document.getElementById("sendLetter");
sendLetter.addEventListener("click", addClass);
