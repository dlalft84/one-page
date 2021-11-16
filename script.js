var myVar;

function loading() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaded").style.display = "block";
}



/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

let slidePosition = 0; // slidePosition(position de départ) = 0
const slides = document.getElementsByClassName('carousel_item'); // slides = classe .carousel_item
const totalSlides = slides.length; // totalSlide = length(longueur) du total des slides (classes .carousel_item)

document.
 getElementById('carousel_button--next') // pour tout élément avec id #carousel_button--next
 .addEventListener("click", function() { // avouter la fonction click pour passer à slide suivante
 	moveToNextSlide();
 })

document.
 getElementById('carousel_button--prev') // pour tout élément avec id #carousel_button--prev
 .addEventListener("click", function() { // avouter la fonction click pour passer à slide précédente
 	moveToPrevSlide();
 })

function updateSlidePosition() { // crée la fonction updateSlidePostition (MaJ de slidePosition)

	for (let slide of slides) {
		slide.classList.remove('carousel_item--visible');
		slide.classList.add('carousel_item--hidden');
	}
	slides[slidePosition].classList.add('carousel_item--visible');
}


 function moveToNextSlide() {
 	if (slidePosition === totalSlides - 1) {
 		slidePosition = 0; 
 	} else {
 		slidePosition++;
 	}

 	updateSlidePosition();
 }

  function moveToPrevSlide() {
 	if (slidePosition ===0) {
 		slidePosition = totalSlides - 1;
 	} else {
 		slidePosition--;
 	}

 	updateSlidePosition();
 }
