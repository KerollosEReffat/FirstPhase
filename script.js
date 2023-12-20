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