function showNav() {
	var navDiv = document.getElementById("responsive-nav");

	if (navDiv.className == "responsive-nav") {
		navDiv.className = "responsive-nav unfold"
	} else {
		navDiv.className = "responsive-nav"
	}
}

// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('#header #main-title', {
	origin: 'top',
	distance: '10px'
});

sr.reveal('#header #subtitle', {
	origin: 'top',
	distance: '10px'
});


sr.reveal('#header img.phone', { 
	duration: 500,
	delay: 600 
});