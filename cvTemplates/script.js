let Preloader = document.getElementById("Preloader");

window.addEventListener("load", (e) => (Preloader.style.display = "none"));

(function () {
  var clockElement = document.getElementById("clock");

  function updateClock(clock) {
    clock.innerHTML = new Date().toLocaleTimeString();
  }

  setInterval(function () {
    updateClock(clockElement);
  }, 1000);
})();

const ImageSlider = document.getElementById("slider");
const Carousel = document.getElementById("carousel");
const SlideNavBTNS = document.getElementById("navigation");

const ImagesPath = [
  "../Images/0.jpg",
  "../Images/1.jpg",
  "../Images/2.jpg",
  "../Images/cvKhaled.PNG",
  "../Images/cvMikl.PNG",
  "../Images/cvKerollos.PNG",
];

for (let index = 0; index < ImagesPath.length; index++) {
  const img = document.createElement("img");
  img.src = ImagesPath[index];
  // img.draggable = false;
  if (index == 0) img.id = "FirstIMG";

  const link = document.createElement("a");
  link.href = "../Input/index.html";
  link.textContent = "Select";

  const div = document.createElement("div");
  div.appendChild(img);
  div.appendChild(document.createElement("span"));
  div.appendChild(link);

  const divBTN = document.createElement("div");
  divBTN.className = "slide-icon";

  SlideNavBTNS.appendChild(divBTN);
  Carousel.appendChild(div);
}

const firstCardWidth = document.getElementById("FirstIMG").offsetWidth;

const leftBTN = document.getElementById("leftBTN");
const rightBTN = document.getElementById("rightBTN");

let isDragging = false, startX, startScrollLeft;

leftBTN.addEventListener("click", () => {
  Carousel.scrollLeft -= firstCardWidth;
});
rightBTN.addEventListener("click", () => {
  Carousel.scrollLeft += firstCardWidth;
});

const dragStart = (e) => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = Carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  Carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
};

Carousel.addEventListener("mousedown", dragStart);
Carousel.addEventListener("mousemove", dragging);
Carousel.addEventListener("mouseup", dragStop);
Carousel.addEventListener("mouseleave", dragStop);
