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

// Slider mobile
let slidePosition1 = 0; // slidePosition(position de départ) = 0
const slides1 = document.getElementsByClassName('carousel_item1'); // slides = classe .carousel_item
const totalSlides1 = slides1.length; // totalSlide = length(longueur) du total des slides (classes .carousel_item)

document.
 getElementById('carousel_button--next1') // pour tout élément avec id #carousel_button--next
 .addEventListener("click", function() { // avouter la fonction click pour passer à slide suivante
 	moveToNextSlide1();
 })

document.
 getElementById('carousel_button--prev1') // pour tout élément avec id #carousel_button--prev
 .addEventListener("click", function() { // avouter la fonction click pour passer à slide précédente
 	moveToPrevSlide1();
 })

function updateSlidePosition1() { // crée la fonction updateSlidePostition (MaJ de slidePosition)

	for (let slide1 of slides1) {
		slide1.classList.remove('carousel_item--visible1');
		slide1.classList.add('carousel_item--hidden1');
	}
	slides1[slidePosition1].classList.add('carousel_item--visible1');
}


 function moveToNextSlide1() {
 	if (slidePosition1 === totalSlides1 - 1) {
 		slidePosition1 = 0; 
 	} else {
 		slidePosition1++;
 	}

 	updateSlidePosition1();
 }

  function moveToPrevSlide1() {
 	if (slidePosition1 ===0) {
 		slidePosition1 = totalSlides1 - 1;
 	} else {
 		slidePosition1--;
 	}

 	updateSlidePosition1();
 }
