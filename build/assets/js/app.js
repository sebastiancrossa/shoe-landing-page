window.sr = ScrollReveal();

function showNav() {
 	var navDiv = document.getElementById("responsive-nav");

 	if (navDiv.className == "responsive-nav") {
 		navDiv.className = "responsive-nav unfold"
 	} else {
 		navDiv.className = "responsive-nav"
 	}
 } 

 sr.reveal('#header #main-title', {
 	duration: 800,
 	origin: 'top'
 });

 sr.reveal('#header #subtitle', {
 	duration: 800,
 	origin: 'top'
 });

 sr.reveal('#header .phone', {
 	duration: 500,
 	delay: 800
 });

 sr.reveal('#discount #discount-phone', {
 	duration: 2000,
 	origin: 'left'
 });